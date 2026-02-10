 const texts = document.querySelectorAll(".text");

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function handleScroll() {
  texts.forEach(text => {
    if (isInViewport(text)) {
      text.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();



let margin = 20;
let padding = 20;
let border = 4;
let contentSize = 200;

const marginBox = document.getElementById("marginBox");
const borderBox = document.getElementById("borderBox");
const paddingBox = document.getElementById("paddingBox");
const contentBox = document.getElementById("contentBox");

const marginValue = document.getElementById("marginValue");
const paddingValue = document.getElementById("paddingValue");
const borderValue = document.getElementById("borderValue");
const contentValue = document.getElementById("contentValue");

function updateBox() {
  if (!marginBox || !paddingBox || !borderBox || !contentBox) return;

  marginBox.style.margin = margin + "px";
  paddingBox.style.padding = padding + "px";
  borderBox.style.borderWidth = border + "px";
  contentBox.style.width = contentSize + "px";

  if (marginValue) marginValue.textContent = margin;
  if (paddingValue) paddingValue.textContent = padding;
  if (borderValue) borderValue.textContent = border;
  if (contentValue) contentValue.textContent = contentSize;
}

const bind = (id, fn) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", fn);
};

bind("marginPlus", () => { margin += 10; updateBox(); });
bind("marginMinus", () => { margin = Math.max(0, margin - 10); updateBox(); });
bind("paddingPlus", () => { padding += 10; updateBox(); });
bind("paddingMinus", () => { padding = Math.max(0, padding - 10); updateBox(); });
bind("borderPlus", () => { border += 2; updateBox(); });
bind("borderMinus", () => { border = Math.max(0, border - 2); updateBox(); });
bind("contentPlus", () => { contentSize += 20; updateBox(); });
bind("contentMinus", () => { contentSize = Math.max(50, contentSize - 20); updateBox(); });


const StyleBtn = document.getElementById("StyleBtn");
const main = document.querySelector("main");

const styles = ["demo-style0", "demo-style1", "demo-style2", "demo-style3"];
let currentIndex = 0;

if (StyleBtn && main) {
  StyleBtn.addEventListener("click", () => {
    main.classList.remove(styles[currentIndex]);
    currentIndex++;
    if (currentIndex >= styles.length) {
    currentIndex = 0;
    }
    main.classList.add(styles[currentIndex]);
  });
}

updateBox();