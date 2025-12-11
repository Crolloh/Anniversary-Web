
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