# 🖼️ Web Image Converter

This is a modern, intuitive, and functional image converter that allows users to convert image files into popular formats such as **PNG, JPEG, WEBP, and ICO** directly from a web page.

The system includes a backend based on Node.js and Express to handle image processing, especially for converting to `.ico`.

---

## 🚀 Features

- Image preview before conversion.
- Supported conversion formats:
  - `.png`
  - `.jpeg`
  - `.webp`
  - `.ico` (via backend with automatic resizing)
- Loading spinner during conversion.
- Clear success message when image is converted.
- Direct download of the generated image.
- Modern, responsive interface.

---

## 📁 Project Structure

```
image_converter_web/
├── index.html         # Main converter page
├── style.css          # Interface styles
├── script.js          # Client-side JavaScript logic
├── server.js          # Node.js backend for image conversion (.ico)
├── package.json       # Project config and dependencies
└── README.md          # Project documentation
```

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/)
- Canvas API

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [Sharp](https://sharp.pixelplumbing.com/)
- [to-ico](https://www.npmjs.com/package/to-ico)

---

## ⚙️ Installation & Usage

> Make sure you have **Node.js** installed on your system.

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

5. Open your browser and visit:

```
http://localhost:3000
```

---

## 🧠 Key Details

- The `.ico` format is handled server-side.
- Images are automatically resized to **256x256 px** for icon compatibility.
- Other formats are handled directly in the browser.
- It's recommended to use square, high-resolution images.

---

## 🧪 Usage Example

1. Select an image from your device.
2. Choose the desired output format (PNG, JPEG, WEBP, ICO).
3. Click "Convert Image".
4. Wait for the message "Image converted".
5. Click "Download Image".

---

## 💡 Potential Improvements

- Drag & drop support.
- Multi-image upload.
- PWA (Progressive Web App) support.
- Conversion history.
- Dark mode.
- ICO size selector (32x32, 64x64, 256x256, etc.).

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Edwing**  
Web developer passionate about intuitive interfaces, image processing, and functional design.

---

## 📨 Contact

Have questions or want to collaborate?  
Feel free to open an issue or message me on GitHub.
