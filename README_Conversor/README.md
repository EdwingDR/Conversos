# 🖼️ Conversor de Imágenes Web

Este es un conversor de imágenes moderno, intuitivo y funcional que permite convertir archivos de imagen a varios formatos populares, incluyendo **PNG, JPEG, WEBP y ICO**, directamente desde una página web.

El sistema incluye un backend basado en Node.js y Express para el procesamiento de imágenes, con compatibilidad especial para la conversión a `.ico`.

---

## 🚀 Características

- Vista previa de la imagen cargada antes de la conversión.
- Soporte para conversión a formatos:
  - `.png`
  - `.jpeg`
  - `.webp`
  - `.ico` (mediante backend con redimensionamiento automático)
- Barra de carga tipo "spinner" mientras se realiza la conversión.
- Notificación clara al usuario cuando la imagen ha sido convertida.
- Descarga directa del archivo generado.
- Interfaz moderna y responsive.

---

## 📁 Estructura del proyecto

```
conversor_imagenes_web/
├── index.html         # Página principal del conversor
├── style.css          # Estilos de la interfaz
├── script.js          # Lógica del lado del cliente (JavaScript)
├── server.js          # Backend en Node.js para convertir imágenes (especialmente a .ico)
├── package.json       # Configuración del proyecto y dependencias de Node.js
└── README.md          # Este archivo de documentación
```

---

## 🛠️ Tecnologías utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript puro (Vanilla JS)
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/)
- Canvas API

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [Sharp](https://sharp.pixelplumbing.com/)
- [to-ico](https://www.npmjs.com/package/to-ico)

---

## ⚙️ Instalación y uso

> Asegúrate de tener **Node.js** instalado en tu sistema.

1. Clona o descarga este repositorio.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias necesarias:

```bash
npm install
```

4. Inicia el servidor:

```bash
node server.js
```

5. Abre tu navegador y accede a:

```
http://localhost:3000
```

---

## 🧠 Detalles importantes

- El formato `.ico` requiere procesamiento del lado del servidor.
- La imagen se redimensiona automáticamente a **256x256 px**.
- El resto de formatos se procesan directamente en el navegador.
- Se recomienda usar imágenes cuadradas de buena resolución.

---

## 🧪 Ejemplos de uso

1. Selecciona una imagen desde tu equipo.
2. Elige el formato al que quieres convertirla (PNG, JPEG, WEBP, ICO).
3. Haz clic en "Convertir Imagen".
4. Espera que aparezca el mensaje “Imagen convertida”.
5. Haz clic en "Descargar Imagen".

---

## 💡 Posibles mejoras

- Drag & drop.
- Subida múltiple.
- Aplicación como PWA.
- Historial de conversiones.
- Modo oscuro.
- Selección de tamaño para `.ico`.

---

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

---

## 👨‍💻 Autor

**Edwing**

---

## 📨 Contacto

¿Tienes preguntas o ideas?  
Puedes abrir un issue o escribirme si lo subes a GitHub.
