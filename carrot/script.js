const timer = document.querySelector('#timer');
const playBtn = document.querySelector('#play-btn');
const bugCatchCnt = document.querySelector('#bug-catch-counter');
const catchArea = document.querySelector('#catch-area');

const lostAudio = new Audio('./sound/alert.wav');
const bgAudio = new Audio('./sound/bg.mp3');
const bugAudio = new Audio('./sound/bug_pull.mp3');
const carrotAudio = new Audio('./sound/carrot_pull.mp3');
const winAudio = new Audio('./sound/game_win.mp3');

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
    if (remainingTime == 0) {
      endGameLost();
    }
    if (remainingTime >= 1 && remainingCarrotCnt == 0) {
      endGameWin();
    }
  }
}, 1000);

playBtn.addEventListener('click', () => {
  play();
});

function play() {
  isPlaying = !isPlaying;
  if (!isPlaying) {
    bgAudio.pause();
    playBtn.innerHTML = '►';
  }
  if (isPlaying) {
    bgAudio.play();
    playBtn.innerHTML = '◼︎';
    if (didGameEnd) {
      removeAllCarrontsAndBugs();
      generateCarrots();
      generateBugs();
      didGameEnd = !didGameEnd;
      remainingCarrotCnt = 10;
      remainingTime = 10;
      timer.innerHTML = '00:10';
      bugCatchCnt.innerHTML = `${remainingCarrotCnt}`;
    }
    document.getElementById('lost').style.visibility = 'hidden';
    document.getElementById('win').style.visibility = 'hidden';
  }
}

function endGameLost() {
  isPlaying = false;
  playBtn.innerHTML = '►';
  didGameEnd = true;
  document.getElementById('lost').style.visibility = 'visible';
  lostAudio.play();
  bgAudio.pause();
}

function endGameWin() {
  document.getElementById('win').style.visibility = 'visible';
  isPlaying = false;
  playBtn.innerHTML = '►';
  didGameEnd = true;
  winAudio.play();
  bgAudio.pause();
}

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
      carrotAudio.play();
      if (remainingCarrotCnt == 0 && remainingTime >= 1) {
        endGameWin();
      }
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
  bug.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) {
      bugAudio.play();
      endGameLost();
    }
  });
  return bug;
}

function dispalyLost() {
  const lostWindow = document.createElement('div');
  lostWindow.id = 'lost';

  const replaySpan = document.createElement('div');
  replaySpan.innerHTML = '►';
  replaySpan.addEventListener('click', () => {
    play();
  });
  const lostSpan = document.createElement('div');
  lostSpan.innerHTML = 'You lost';
  lostWindow.appendChild(replaySpan);
  lostWindow.appendChild(lostSpan);
  document.getElementById('background').appendChild(lostWindow);
}

function dispalyWin() {
  const winWindow = document.createElement('div');
  winWindow.id = 'win';

  const replaySpan = document.createElement('div');
  replaySpan.innerHTML = '►';
  replaySpan.addEventListener('click', () => {
    play();
  });
  const winSpan = document.createElement('div');
  winSpan.innerHTML = 'You Won!!!';
  winWindow.appendChild(replaySpan);
  winWindow.appendChild(winSpan);
  document.getElementById('background').appendChild(winWindow);
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
dispalyWin();
document.getElementById('lost').style.visibility = 'hidden';
document.getElementById('win').style.visibility = 'hidden';
