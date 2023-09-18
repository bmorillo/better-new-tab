document.addEventListener("DOMContentLoaded", function () {
    let timerInterval;
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;

    const timerDisplay = document.getElementById("timer-display");
    const startButton = document.getElementById("start");
    const pauseButton = document.getElementById("pause");
    const resetButton = document.getElementById("reset");
    const normalButton = document.getElementById("normal");
    const shortBreakButton = document.getElementById("short-break");
    const longBreakButton = document.getElementById("long-break");

    //Ensures the timer display is always displaying time in the correct format
    function updateDisplay() {
        timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    //Starts the timer and checks if it is done
    function startTimer() {
        isRunning = true;
        startButton.disabled = true;
        pauseButton.disabled = false;
        resetButton.disabled = false;
        normalButton.disabled = true;
        shortBreakButton.disabled = true;
        longBreakButton.disabled = true;

        //Checking if done and enabling/disabling corresponding buttons
        timerInterval = setInterval(function () {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timerInterval);
                isRunning = false;
                startButton.disabled = false;
                pauseButton.disabled = true;
                resetButton.disabled = false;
                normalButton.disabled = false;
                shortBreakButton.disabled = false;
                longBreakButton.disabled = false;
            } else {
                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateDisplay();
            }
        }, 1000);
    }

    //Pauses the timer
    function pauseTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        startButton.disabled = false;
        pauseButton.disabled = true;
        resetButton.disabled = false;
        normalButton.disabled = false;
        shortBreakButton.disabled = false;
        longBreakButton.disabled = false;
    }

    //Resets the timer
    function resetTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        minutes = 25;
        seconds = 0;
        updateDisplay();
        startButton.disabled = false;
        pauseButton.disabled = true;
        resetButton.disabled = true;
        normalButton.disabled = false;
        shortBreakButton.disabled = false;
        longBreakButton.disabled = false;
    }

    //Setting is used to that a button option can set the time
    function setTimer(duration) {
        if (!isRunning) {
            minutes = duration;
            seconds = 0;
            updateDisplay();
        }
    }

    normalButton.addEventListener("click", function () {
        setTimer(25);
    });

    shortBreakButton.addEventListener("click", function () {
        setTimer(5);
    });

    longBreakButton.addEventListener("click", function () {
        setTimer(15);
    });

    startButton.addEventListener("click", startTimer);
    pauseButton.addEventListener("click", pauseTimer);
    resetButton.addEventListener("click", resetTimer);

    updateDisplay();
});
