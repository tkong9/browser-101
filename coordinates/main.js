const followMouse = (event) => {
  // imageContainer.style.left = `${event.clientX}px`;
  // imageContainer.style.top = `${event.clientY}px`;

  imageContainer.style.transform = `translate(${
    event.clientX - imageHalfWidth
  }px, ${event.clientY - imageHalfHeight}px)`;

  textContainer.style.transform = `translate(${event.clientX + 20}px, ${
    event.clientY + 20
  }px)`;

  vertical.style.transform = `translate(${event.clientX}px, ${
    event.clientY - window.innerHeight
  }px)`;

  horizontal.style.transform = `translate(${
    event.clientX - window.innerWidth
  }px, ${event.clientY}px)`;

  textContainer.innerHTML = `${Math.round(event.clientX)}px, ${Math.round(
    event.clientY
  )}px`;
};

let imageContainer = document.querySelector('#image');
let textContainer = document.querySelector('#text');
let vertical = document.querySelector('#vertical');
let horizontal = document.querySelector('#horizontal');

const imageHalfWidth = imageContainer.getBoundingClientRect().width / 2;
const imageHalfHeight = imageContainer.getBoundingClientRect().height / 2;

window.addEventListener('pointermove', followMouse);
