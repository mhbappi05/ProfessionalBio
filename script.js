// LEFT: staggered fade-in for detail list
window.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "🎨 Expert in Figma & Sketch",
    "💻 5+ years Front-end development",
    "🚀 Passionate about micro-interactions",
    "📱 Responsive & accessible design",
  ];
  const el = document.getElementById("typewriter");
  let msgIdx = 0,
    charIdx = 0;

  function typeLine() {
    const line = messages[msgIdx];
    if (charIdx < line.length) {
      el.textContent += line.charAt(charIdx++);
      setTimeout(typeLine, 50);
    } else {
      // pause on full line, then clear and next
      setTimeout(() => {
        el.textContent = "";
        charIdx = 0;
        msgIdx = (msgIdx + 1) % messages.length;
        typeLine();
      }, 1500);
    }
  }

  typeLine();

  // RIGHT: pop-in each social icon one by one
  document.querySelectorAll(".icons-wrapper .icon").forEach((icon, i) => {
    setTimeout(() => {
      icon.classList.add("visible");
    }, 1000 + i * 800);
  });
});

// MATRIX RAIN
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
  "01helloworldhasananuノホモヨョロヲゴゾドボポヴッン01helloworldhasananuノホモヨョロヲゴゾドボポヴッン";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  // translucent BG to create the fade trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = getComputedStyle(document.documentElement)
    .getPropertyValue("--matrix-color")
    .trim();
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    const x = i * fontSize;
    ctx.fillText(text, x, y * fontSize);

    if (y * fontSize > canvas.height || Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(draw, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
