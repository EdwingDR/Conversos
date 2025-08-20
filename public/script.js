const imageInput = document.getElementById('imageInput');
const formatSelect = document.getElementById('formatSelect');
const convertBtn = document.getElementById('convertBtn');
const downloadBtn = document.getElementById('downloadBtn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const previewImage = document.getElementById('previewImage');
const loading = document.getElementById('loading');
const message = document.getElementById('message');

let convertedBlob = null;
let downloadUrl = null;

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (file) {
    const previewURL = URL.createObjectURL(file);
    previewImage.src = previewURL;
    previewImage.style.display = 'block';
    // Reset mensajes y descarga al cargar nueva imagen
    message.style.display = 'none';
    downloadBtn.disabled = true;
  }
});

convertBtn.addEventListener('click', async () => {
  if (!imageInput.files.length) {
    alert('Por favor, selecciona una imagen primero.');
    return;
  }

  const format = formatSelect.value;
  const file = imageInput.files[0];

  // Mostrar spinner y ocultar mensaje
  loading.style.display = 'block';
  message.style.display = 'none';
  message.textContent = '';

  if (format === 'ico') {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:3000/convert', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Error al convertir la imagen a .ico');
      }

      const blob = await response.blob();
      downloadUrl = URL.createObjectURL(blob);
      downloadBtn.disabled = false;
      downloadBtn.dataset.filename = 'convertido.ico';

      // Mostrar mensaje de éxito
      message.textContent = 'Imagen convertida correctamente.';
      message.style.display = 'block';

    } catch (error) {
      alert(error.message);
    } finally {
      loading.style.display = 'none';
    }

    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      let mimeType = 'image/png';
      let ext = 'png';
      if (format === 'jpeg') {
        mimeType = 'image/jpeg';
        ext = 'jpg';
      } else if (format === 'webp') {
        mimeType = 'image/webp';
        ext = 'webp';
      }

      canvas.toBlob(function(blob) {
        convertedBlob = blob;
        downloadBtn.disabled = false;
        downloadBtn.dataset.filename = `convertido.${ext}`;
        downloadUrl = URL.createObjectURL(blob);

        // Ocultar spinner y mostrar mensaje
        loading.style.display = 'none';
        message.textContent = 'Imagen convertida correctamente.';
        message.style.display = 'block';
      }, mimeType);
    };
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

downloadBtn.addEventListener('click', () => {
  const filename = downloadBtn.dataset.filename || 'imagen_convertida.png';
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = filename;
  a.click();
});
