const timer = document.querySelector('#timer');
const playBtn = document.querySelector('#play-btn');
const bugCatchCnt = document.querySelector('#bug-catch-counter');
const catchArea = document.querySelector('#catch-area');

// Timer
let isPlaying = false;
let remainingTime = 10;
timer.innerHTML = '00:10';

gameTimer = setInterval(() => {
  if (isPlaying) {
    remainingTime -= 1;
    timer.innerHTML = `00:0${remainingTime}`;
    if (remainingTime <= 0) {
      isPlaying = false;
      remainingTime = 10;
      timer.innerHTML = '00:10';
      playBtn.innerHTML = '►';
    }
  }
}, 1000);

playBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (!isPlaying) playBtn.innerHTML = '►';
  if (isPlaying) playBtn.innerHTML = '◼︎';
});

// generate bugs and carrots
bugCatchCnt.innerHTML = '0';
const catchAreaRect = catchArea.getBoundingClientRect();

function generateCarrors() {
  // let x = Math.floor(Math.random() * 100 + 1);
  let x = Math.floor(Math.random() * (catchAreaRect.width - 60));
  let y = Math.floor(Math.random() * (catchAreaRect.height - 60));
  console.log(`x: ${x}, y: ${y}`);
  let carrot = makeCarrot(x, y);
  catchArea.append(carrot);
  console.log(carrot);
}

function makeCarrot(x, y) {
  const carrot = document.createElement('img');
  carrot.setAttribute('src', './img/carrot.png');
  carrot.setAttribute('alt', 'carrot');
  carrot.className = 'carrot-img';
  carrot.style.left = `${x}px`;
  carrot.style.top = `${y}px`;
  return carrot;
}

function makeBug(x, y) {}

for (let i = 0; i < 10; i++) {
  generateCarrors();
}
