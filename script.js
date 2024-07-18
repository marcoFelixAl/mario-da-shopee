const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.getElementById('score');

let score = 0;
let isGameOver = false;


const jump = () => {
    if (!mario.classList.contains('jump') && !isGameOver) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        if (!isGameOver) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
            mario.style.bottom = `${marioPosition}px`; 
            mario.classList.remove('jump');
            isGameOver = true; 
            clearInterval(loop); 
        }
    }

 
    if (!isGameOver && pipePosition < -80) {

        pipe.style.animation = 'pipe-animation 2s infinite linear';
        pipe.style.left = '100%';
        score++;
        scoreElement.textContent = score;
    }

   
    console.log(`Pipe Position: ${pipePosition}, Mario Position: ${marioPosition}, Score: ${score}`);

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
