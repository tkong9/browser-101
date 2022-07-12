const followMouse = (event) => {
  imageContainer.style.left = `${event.clientX}px`;
  imageContainer.style.top = `${event.clientY}px`;

  textContainer.style.left = `${event.clientX + 20}px`;
  textContainer.style.top = `${event.clientY + 20}px`;

  vertical.style.left = `${event.clientX}px`;
  vertical.style.top = `${event.clientY - window.innerHeight}px`;

  horizontal.style.left = `${event.clientX - window.innerWidth}px`;
  horizontal.style.top = `${event.clientY}px`;

  textContainer.innerHTML = `${Math.round(event.clientX)}px, ${Math.round(
    event.clientY
  )}px`;
};

function mousemove(e) {
  // console.log(`${e.clientX}, ${e.clientY}`);
}

let imageContainer = document.querySelector('#image');
let textContainer = document.querySelector('#text');
let vertical = document.querySelector('#vertical');
let horizontal = document.querySelector('#horizontal');

window.addEventListener('pointermove', mousemove);
window.addEventListener('pointermove', followMouse);
