const title = document.querySelector("h1");

const text = "hi! i'm sakshi";
let index = 0;

title.textContent = "";

function typeEffect() {
  if (index < text.length) {
    title.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}

typeEffect();

title.addEventListener("mouseover", () => {
  title.style.transform = "scale(1.1)";
});

title.addEventListener("mouseout", () => {
  title.style.transform = "scale(1)";
});