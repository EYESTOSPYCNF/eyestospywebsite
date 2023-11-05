// 11 of octuber
const targetDate = new Date('2023-10-11T22:00:00Z');

function updateCountdown() {
    const currentDate = new Date();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();


// Show popup window on page load
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Close popup window when clicking on the X
    const popupClose = document.getElementById('popup-close');
    popupClose.addEventListener('click', function () {
        popup.style.animation = 'popupFadeOut 0.5s ease-in-out forwards'; // Apply exit animation
        setTimeout(function () {
            popup.style.display = 'none';
        }, 500); // Wait for the animation to finish before hiding it
    });
});
