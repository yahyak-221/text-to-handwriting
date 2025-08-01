import {
  addFontFromFile,
  formatText,
  addPaperFromFile,
} from "./utils/helpers.mjs";
import {
  generateImages,
  downloadAsPDF,
  deleteAll,
} from "./generate-images.mjs";
import { setInkColor, toggleDrawCanvas } from "./utils/draw.mjs";

const pageEl = document.querySelector(".page-a");

const setTextareaStyle = (attrib, v) => (pageEl.style[attrib] = v);

/**
 * Add event listeners here, they will be automatically mapped with addEventListener later
 */
const EVENT_MAP = {
  "#generate-image-form": {
    on: "submit",
    action: (e) => {
      e.preventDefault();
      generateImages();
    },
  },
  "#handwriting-font": {
    on: "change",
    action: (e) =>
      document.body.style.setProperty("--handwriting-font", e.target.value),
  },
  "#font-size": {
    on: "change",
    action: (e) => {
      if (e.target.value > 30) {
        alert("Font-size is too big try upto 30");
      } else {
        setTextareaStyle("fontSize", e.target.value + "pt");
        e.preventDefault();
      }
    },
  },
  "#letter-spacing": {
    on: "change",
    action: (e) => {
      if (e.target.value > 40) {
        alert("Letter Spacing is too big try a number upto 40");
      } else {
        setTextareaStyle("letterSpacing", e.target.value + "px");
        e.preventDefault();
      }
    },
  },
  "#word-spacing": {
    on: "change",
    action: (e) => {
      if (e.target.value > 100) {
        alert("Word Spacing is too big try a number upto hundred");
      } else {
        setTextareaStyle("wordSpacing", e.target.value + "px");
        e.preventDefault();
      }
    },
  },
  "#top-padding": {
    on: "change",
    action: (e) => {
      document.querySelector(".page-a .paper-content").style.paddingTop =
        e.target.value + "px";
    },
  },
  "#font-file": {
    on: "change",
    action: (e) => addFontFromFile(e.target.files[0]),
  },
  "#ink-color": {
    on: "change",
    action: (e) => {
      document.body.style.setProperty("--ink-color", e.target.value);
      setInkColor(e.target.value);
    },
  },
  "#paper-margin-toggle": {
    on: "change",
    action: () => {
      if (pageEl.classList.contains("margined")) {
        pageEl.classList.remove("margined");
      } else {
        pageEl.classList.add("margined");
      }
    },
  },
  "#paper-line-toggle": {
    on: "change",
    action: () => {
      if (pageEl.classList.contains("lines")) {
        pageEl.classList.remove("lines");
      } else {
        pageEl.classList.add("lines");
      }
    },
  },
  "#draw-diagram-button": {
    on: "click",
    action: () => {
      toggleDrawCanvas();
    },
  },
  ".draw-container .close-button": {
    on: "click",
    action: () => {
      toggleDrawCanvas();
    },
  },
  "#download-as-pdf-button": {
    on: "click",
    action: () => {
      downloadAsPDF();
    },
  },
  "#delete-all-button": {
    on: "click",
    action: () => {
      deleteAll();
    },
  },
  ".page-a .paper-content": {
    on: "paste",
    action: formatText,
  },
  "#paper-file": {
    on: "change",
    action: (e) => addPaperFromFile(e.target.files[0]),
  },
};

for (const eventSelector in EVENT_MAP) {
  document
    .querySelector(eventSelector)
    .addEventListener(
      EVENT_MAP[eventSelector].on,
      EVENT_MAP[eventSelector].action
    );
}

/**
 * This makes toggles, accessible.
 */
document.querySelectorAll(".switch-toggle input").forEach((toggleInput) => {
  toggleInput.addEventListener("change", (e) => {
    if (toggleInput.checked) {
      document.querySelector(
        `label[for="${toggleInput.id}"] .status`
      ).textContent = "on";
      toggleInput.setAttribute("aria-checked", true);
    } else {
      toggleInput.setAttribute("aria-checked", false);
      document.querySelector(
        `label[for="${toggleInput.id}"] .status`
      ).textContent = "off";
    }
  });
});

const img = document.createElement("img");
img.src = generatedImageURL;
img.classList.add("output-image"); // ← this is required
document.getElementById("output").appendChild(img);
