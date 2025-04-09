const containerEl = document.querySelector(".container");

let previousColors = [];

for (let index = 0; index < 104; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");


function generateColors() {
  previousColors = [];   // Save current colors before changing
  colorContainerEls.forEach((colorContainerEl) => {
    previousColors.push(colorContainerEl.innerText); // store current color
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

// Back button functionality
function showPreviousColors() {
    if (previousColors.length === 0) return; // no previous colors
  
    colorContainerEls.forEach((colorContainerEl, index) => {
      const oldColor = previousColors[index];
      colorContainerEl.style.backgroundColor = oldColor;
      colorContainerEl.innerText = oldColor;
    });
  }

generateColors();

document.getElementById("generate-btn").addEventListener("click", generateColors);
document.getElementById("back-btn").addEventListener("click", showPreviousColors);


function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode = colorCode + chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

colorContainerEls.forEach((colorContainerEl) => {
    colorContainerEl.addEventListener("dblclick", () => {
      const hexCode = colorContainerEl.innerText;
  
      navigator.clipboard.writeText(hexCode);
      const originalText = colorContainerEl.innerText;
      colorContainerEl.innerText = "✅ Copied!";
  
      setTimeout(() => {
        colorContainerEl.innerText = originalText;
      }, 300);
    });
  });
  
