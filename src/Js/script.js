function runTypinfEffect() {
  const text = 'I am Harsh Kumar .';
  const typingEl = document.querySelector('#typing-text');
  const typingDelay = 150;

  typeText(text, typingEl, typingDelay);
}

function typeText(text, typingEl, typingDelay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingEl.textContent += text.charAt(i);
    }, typingDelay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypinfEffect);
