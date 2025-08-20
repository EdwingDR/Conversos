// server.js
const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const toIco = require('to-ico');
const cors = require('cors');

const app = express();
const upload = multer();

app.use(cors());

app.post('/convert', upload.single('image'), async (req, res) => {
  try {
    const inputBuffer = req.file.buffer;

    // Redimensionar la imagen a 256x256 píxeles con fondo transparente
    const resizedBuffer = await sharp(inputBuffer)
      .resize(256, 256, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    // Convertir la imagen PNG redimensionada a .ico
    const icoBuffer = await toIco(resizedBuffer);

    res.set('Content-Type', 'image/x-icon');
    res.send(icoBuffer);
  } catch (error) {
    console.error('Error al convertir a .ico:', error);
    res.status(500).send('Error al convertir la imagen a .ico');
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

