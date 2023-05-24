let timerInterval;
let countDownDate;

function startTimer() {
  const hoursInput = document.getElementById("hoursInput");
  const minutesInput = document.getElementById("minutesInput");
  const secondsInput = document.getElementById("secondsInput");

  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);

  countDownDate =
    new Date().getTime() + hours * 3600000 + minutes * 60000 + seconds * 1000;

  timerInterval = setInterval(updateTimer, 1000);

  toggleButtons(true);
}

function updateTimer() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").textContent = padZero(hours);
  document.getElementById("minutes").textContent = padZero(minutes);
  document.getElementById("seconds").textContent = padZero(seconds);

  if (distance < 0) {
    stopTimer();
    document.getElementById("timer").innerHTML = "<h2>Время истекло!</h2>";
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  toggleButtons(false);
}

function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}

function toggleButtons(running) {
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");

  startButton.disabled = running;
  stopButton.disabled = !running;
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
