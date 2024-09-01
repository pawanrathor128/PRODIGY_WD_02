let timer = document.getElementById('timer');
let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');
let intervalId;
let seconds = 0;
let milliseconds = 0;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    intervalId = setInterval(() => {
        milliseconds += 10; // Increment by 10ms to account for 100 updates per second
        if (milliseconds >= 1000) { // Convert 1000 milliseconds to 1 second
            milliseconds = 0;
            seconds++;
        }
        timer.textContent = formatTime(seconds, milliseconds);
    }, 10); // Update every 10 milliseconds
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    milliseconds = 0;
    timer.textContent = formatTime(seconds, milliseconds);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function formatTime(seconds, milliseconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secondsDisplay = seconds % 60;
    let millisecondsDisplay = Math.floor(milliseconds / 10); // Convert to tenths of a second
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(secondsDisplay)}.${padZero(millisecondsDisplay, 2)}`;
}

function padZero(number, length = 2) {
    return number.toString().padStart(length, '0');
}
