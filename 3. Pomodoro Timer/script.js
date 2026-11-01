const timerEl = document.querySelector(".timer");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

let interval;
let timeLeft = 1500;

const startTimer = () => {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time is up");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
};

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

const resetTimer = () => {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
};

const stopTimer = function () {
  clearInterval(interval);
};

startEl.addEventListener("click", startTimer);
resetEl.addEventListener("click", resetTimer);
stopEl.addEventListener("click", stopTimer);
