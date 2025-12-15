
(function() { //heart after clicking button
    const btn = document.getElementById('heart-btn');
    const container = document.getElementById('heart-cont');

    function rand(min, max) { //random number with decimal points lol
        return Math.random() * (max - min) + min;
}
    btn.addEventListener('click', () => { // this is a call back function () => {} (= do this) 
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💖';

        const startX = rand(10, 90);
        const startY = rand(80, 80);
        heart.style.left = startX + 'vw';
        heart.style.top = startY + 'vh';
        heart.style.transform = `translateY(0) rotate(${rand(-20, 20)}deg)`;
        container.appendChild(heart);
        void heart.offsetWidth;
        heart.classList.add('animate');

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    });
})();

(function() { //letter
    const btn = document.getElementById('letter-button');
    const container = document.querySelector('.letter-text')

    btn.addEventListener('click', () =>{
        if (container.style.display === "none"){
            container.style.display = 'block';
        }else
            container.style.display = "none";
    })
})();

(function() { //bg music and sfx
    const music = document.getElementById('bg-music');
    const playpause = document.getElementById('playpause');
    const mute = document.getElementById('mute');
    const volume = document.getElementById('volume');
    const papersfx = document.getElementById('paper-sfx');
    const btn = document.getElementById('letter-button');
    const container = document.querySelector('.letter-text')

    music.volume= 0.5;
    papersfx.volume= 0.25;

    playpause.addEventListener('click', ()=> { 
        if (music.paused) {
            music.play();
            playpause.textContent = 'Pause';
        } else {
            music.pause();
            playpause.textContent ='Play';
        }
    });
    mute.addEventListener('click', () => {
        if (music.muted === false) {
            music.muted = true;
            mute.textContent = 'Muted';
        } else {
            music.muted = false;
            mute.textContent = 'Mute';
        }
    });
    volume.addEventListener('input', () => {
        music.volume = volume.value;
    });
    btn.addEventListener('click', () => {
        if (container.style.display === 'block') {
           setTimeout(() => {
            papersfx.play();
        }, 450); 
        }     
    })
})();