// Smooth fade-in animation for sections
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});
// Typing animation
const typingText = document.querySelector(".typing-text");
const textArray = [
  "Python Developer 🐍",
  "AI Enthusiast 🤖",
  "Machine Learning Explorer 📊"
];

let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
