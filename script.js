// I did a tutorial for this.... so im not that good at js.... yet.
const customCursor = document.querySelector('.custom-cursor');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

const easing = 0.2;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// The animation loop
function animateCursor() {
  cursorX += (mouseX - cursorX) * easing;
  cursorY += (mouseY - cursorY) * easing;


  customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;


  requestAnimationFrame(animateCursor);
}


animateCursor();