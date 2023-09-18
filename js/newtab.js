
let timeDisplay = document.getElementById('time');
let hours, minutes, seconds;
let hovering = false;


//Getting and updating the time
function updateTime() {
    const currentTime = new Date();
    hours = currentTime.getHours().toString().padStart(2, '0');
    minutes = currentTime.getMinutes().toString().padStart(2, '0');
    seconds = currentTime.getSeconds().toString().padStart(2, '0');

    if (hovering) {
        timeDisplay.textContent = `${hours} : ${minutes} : ${seconds}`;
    } else {
        timeDisplay.textContent = `${hours} : ${minutes}`;
    }
}

timeDisplay.addEventListener('mouseover', mouseOver);
timeDisplay.addEventListener('mouseout', mouseOut);

//Functions for when the mouse hovers over and out of the time
function mouseOver() {
    hovering = true;
    updateTime();
}
function mouseOut() {
    hovering = false;
    updateTime();
}

//Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
