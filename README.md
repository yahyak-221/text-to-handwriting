# ✍️ Text to Handwriting Converter

Convert typed text into realistic handwriting-style images that look like handwritten notes. Customize fonts, colors, paper styles, and export them as PNG or PDF — perfect for students, designers, or aesthetic creators.

---

## 🚀 Features

- 📝 Convert rich text to handwriting
- ✍️ Choose from built-in handwriting fonts or upload your own
- 🎨 Customize font size, ink color, paper size, and spacing
- 📄 Upload background paper (lined, grid, or your own image)
- 🖼️ Download generated notes as image
- 📥 Export all images as PDF
- 🗑️ Clear all generated images with one click
- 🌙 Light / Dark mode toggle
- 🧠 Persistent custom settings with localStorage

---

## 🛠️ Tech Stack

- HTML5, CSS3
- Vanilla JavaScript (ES Modules)
- jsPDF for PDF generation
- html2canvas for canvas conversion
- Custom fonts via Google Fonts and user uploads

---

## 📂 Folder Structure

```
text-to-handwriting/
├── index.html # Main landing page
├── dashboard.php # User dashboard (if using PHP)
├── js/
│ ├── app.mjs # Main application logic
│ └── vendors/ # Third-party libraries like html2canvas
├── css/
│ ├── index.css # Styling for main page
│ └── features.css # Component-level styles
├── images/ # Icons, favicons, background images
└── README.md # Project documentation
```

---

## 📌 How to Use

1. Type or paste your text in the input box.
2. Customize appearance (font, size, ink, spacing, etc.)
3. Click **"Generate Image"** to create the handwriting.
4. Use:
   - **Download All as PDF** button to export all images
   - **Clear All** button to remove all generated images

> All features work entirely on the client side — no backend needed unless saving notes.
