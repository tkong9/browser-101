const timer = document.querySelector('#timer');
const playBtn = document.querySelector('#play-btn');
const bugCatchCnt = document.querySelector('#bug-catch-counter');

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
