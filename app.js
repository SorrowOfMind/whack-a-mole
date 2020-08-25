const squares = [...document.getElementsByClassName('square')];
const board = document.getElementById('board');
const btn = document.getElementById('btn');
const timer = document.getElementById('timer');
const points = document.getElementById('points');
let totalTime = 60;
let score = 0;
let currentPos = null;

btn.addEventListener('click', function () {
    this.style.display = 'none';
    let timeLeft = setInterval(() => {
        totalTime--;
        timer.innerText = totalTime;
        if (totalTime === 0) clearInterval((timeLeft));
    }, 1000);
    moveMole();
});

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generateMole = () => {
    squares.forEach(square => square.classList.remove('mole'));
    let idx = getRandom(0, 8);
    squares[idx].classList.add('mole');
    currentPos = idx + 1;
}

const moveMole = () => {
    let moleInteral = setInterval(() => {
        generateMole();
        if (totalTime === 0) clearInterval(moleInteral);
    }, 700);
}

const markHit = e => {
    if (parseInt(e.target.id) === currentPos) {
        console.log('hit!')
        score += 10;
        points.textContent = score;
        squares[currentPos - 1].classList.remove('mole');
    }
}

board.addEventListener('click', markHit);
board.addEventListener('doubleclick', markHit);