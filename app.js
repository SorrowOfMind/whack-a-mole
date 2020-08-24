const squares = document.getElementsByClassName('square');
const btn = document.getElementById('btn');
const timer = document.getElementById('timer');
let totalTime = 60;

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    let timeLeft = setInterval(() => {
        totalTime--;
        timer.innerText = totalTime;
        if (totalTime === 0) clearInterval((timeLeft));
    }, 1000)
})