const followMouse = (event) => {
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

//layer shift가 일어나기 때문에 아래 처럼 코드를 작성하는것은 좋지 않다.
const followMouse2 = (event) => {
  imageContainer.style.left = `${event.clientX}px`;
  imageContainer.style.top = `${event.clientY}px`;

  textContainer.style.left = `${event.clientX + 20}px`;
  textContainer.style.top = `${event.clientY + 20}px`;

  vertical.style.left = `${event.clientX}px`;
  vertical.style.top = `${event.clientY - window.innerHeight}px`;

  horizontal.style.left = `${event.clientX - window.innerWidth}px`;
  horizontal.style.top = `${event.clientY}px`;
};

let imageContainer = document.querySelector('#image');
let textContainer = document.querySelector('#text');
let vertical = document.querySelector('#vertical');
let horizontal = document.querySelector('#horizontal');

const imageHalfWidth = imageContainer.getBoundingClientRect().width / 2;
const imageHalfHeight = imageContainer.getBoundingClientRect().height / 2;

window.addEventListener('pointermove', followMouse);
