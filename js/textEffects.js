// TYPEWRITER EFFECT
class TypeWriter {
  constructor(textElement, words, wait = 3000) {
    this.textElement = textElement;
    this.words = words;
    this.text = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullText = this.words[current];

    this.text = this.isDeleting
      ? fullText.substring(0, this.text.length - 1)
      : fullText.substring(0, this.text.length + 1);

    this.textElement.innerHTML = `<span class="text">${this.text}</span>`;

    let typeSpeed = 300;
    if (this.isDeleting) typeSpeed /= 2;

    if (!this.isDeleting && this.text === fullText) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// SCROLL FADE EFFECT
function scrollFade() {
  const elements = document.querySelectorAll(".show-on-scroll");
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 20;
    el.classList.toggle("is-visible", isVisible);
  });
}

function loop() {
  scrollFade();
  requestAnimationFrame(loop);
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".text-type");
  if (textElement) {
    const words = JSON.parse(textElement.getAttribute("data-words"));
    const wait = textElement.getAttribute("data-wait");
    new TypeWriter(textElement, words, wait);
  }

  loop(); // start scroll loop
});
