// Typing Reveal Effect
document.getElementById('reveal-btn').addEventListener('click', function () {

    const prankDiv = document.getElementById('prank');
    const prankText = document.getElementById('prank-text');
    prankDiv.classList.add('show');

    const text = "Just kidding! Your real gift is a lifetime supply of memes and my emotional support forever 😌";
    let i = 0;
    prankText.innerHTML = "";

    function type() {
        if (i < text.length) {
            prankText.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }
    type();
});


// Confetti Animation
document.getElementById('confetti-btn').addEventListener('click', function () {

    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let particles = [];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 6 + 4,
            speed: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360},100%,50%)`
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
            p.y += p.speed;

            if (p.y > canvas.height) {
                p.y = 0;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 5000);
});


// Chaos Mode
document.getElementById('prank-mode').addEventListener('click', function () {
    document.body.classList.toggle('chaos');
});


// Music Toggle
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");

musicBtn.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicBtn.innerText = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerText = "🎵 Play Music";
    }
});
