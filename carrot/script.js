const timer = document.querySelector('#timer');
const playBtn = document.querySelector('#play-btn');
const bugCatchCnt = document.querySelector('#bug-catch-counter');
const catchArea = document.querySelector('#catch-area');

// Timer
let isPlaying = false;
let remainingTime = 10;
let remainingCarrotCnt = 10;
let didGameEnd = true;
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
      didGameEnd = true;
    }
  }
}, 1000);

playBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (!isPlaying) {
    playBtn.innerHTML = '►';
  }
  if (isPlaying) {
    playBtn.innerHTML = '◼︎';
    if (didGameEnd) {
      removeAllCarrontsAndBugs();
      generateCarrots();
      generateBugs();
      didGameEnd = !didGameEnd;
    }
  }
});

// generate bugs and carrots
bugCatchCnt.innerHTML = `${remainingCarrotCnt}`;
const catchAreaRect = catchArea.getBoundingClientRect();

function generateCarrots() {
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * (catchAreaRect.width - 40));
    let y = Math.floor(Math.random() * (catchAreaRect.height - 40));
    let carrot = makeCarrot(x, y);
    catchArea.append(carrot);
  }
}

function generateBugs() {
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * (catchAreaRect.width - 40));
    let y = Math.floor(Math.random() * (catchAreaRect.height - 40));
    let bug = makeBug(x, y);
    catchArea.append(bug);
  }
}

function makeCarrot(x, y) {
  const carrot = document.createElement('img');
  carrot.setAttribute('src', './img/carrot.png');
  carrot.setAttribute('alt', 'carrot');
  carrot.className = 'carrot-img';
  carrot.style.left = `${x}px`;
  carrot.style.top = `${y}px`;
  carrot.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) {
      carrot.remove();
      remainingCarrotCnt -= 1;
      bugCatchCnt.innerHTML = `${remainingCarrotCnt}`;
    }
  });
  return carrot;
}

function makeBug(x, y) {
  const bug = document.createElement('img');
  bug.setAttribute('src', './img/bug.png');
  bug.setAttribute('alt', 'bug');
  bug.className = 'bug-img';
  bug.style.left = `${x}px`;
  bug.style.top = `${y}px`;
  return bug;
}

function dispalyLost() {
  const lostWindow = document.createElement('div');
  lostWindow.id = 'lost';

  const replaySpan = document.createElement('span');
  replaySpan.innerHTML = '►';
  const lostSpan = document.createElement('span');
  lostSpan.innerHTML = 'You lost';
  lostWindow.appendChild(replaySpan);
  lostWindow.appendChild(lostSpan);
  document.getElementById('background').appendChild(lostWindow);
}

function removeAllCarrontsAndBugs() {
  const carrots = document.querySelectorAll('.carrot-img');
  const bugs = document.querySelectorAll('.bug-img');
  for (const carrot of carrots) {
    carrot.remove();
  }
  for (const bug of bugs) {
    bug.remove();
  }
}

dispalyLost();
