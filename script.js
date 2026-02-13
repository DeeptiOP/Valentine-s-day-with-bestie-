// =======================================
// SAFE ELEMENT HELPER
// =======================================
function safeAddListener(element, event, callback) {
    if (element) {
        element.addEventListener(event, callback);
    }
}

// =======================================
// PAGE ENTRANCE FADE
// =======================================
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});

// =======================================
// TYPING REVEAL EFFECT
// =======================================
const revealBtn = document.getElementById("reveal-btn");
const prankDiv = document.getElementById("prank");
const prankText = document.getElementById("prank-text");

safeAddListener(revealBtn, "click", function () {

    if (!prankDiv || !prankText) return;

    revealBtn.disabled = true;
    prankDiv.classList.add("show");

    const text = "Just kidding! Your real gift is a lifetime supply of memes and my emotional support forever 😌";
    let i = 0;
    prankText.innerHTML = "";

    function type() {
        if (i < text.length) {
            prankText.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }

    type();
});

// =======================================
// CONFETTI EXPLOSION + PRANK MESSAGE
// =======================================
const confettiBtn = document.getElementById("confetti-btn");
const canvas = document.getElementById("confetti-canvas");
const singleMessage = document.getElementById("single-message");

if (canvas) {
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    safeAddListener(confettiBtn, "click", function () {

        if (singleMessage) {
            singleMessage.classList.remove("show");
            singleMessage.innerHTML = "";
        }

        let particles = [];

        for (let i = 0; i < 200; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                size: Math.random() * 6 + 4,
                speedX: (Math.random() - 0.5) * 10,
                speedY: (Math.random() - 0.5) * 10,
                color: `hsl(${Math.random() * 360},100%,50%)`,
                life: 100
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, index) => {
                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);

                p.x += p.speedX;
                p.y += p.speedY;
                p.life--;

                if (p.life <= 0) {
                    particles.splice(index, 1);
                }
            });

            if (particles.length > 0) {
                requestAnimationFrame(animate);
            }
        }

        animate();

        // After 2 seconds show prank text
        setTimeout(() => {
            if (singleMessage) {
                singleMessage.innerHTML = "💀 Stay single forever like me 😌";
                singleMessage.classList.add("show");
            }
        }, 2000);
    });
}

// =======================================
// CHAOS MODE
// =======================================
const chaosBtn = document.getElementById("prank-mode");

safeAddListener(chaosBtn, "click", function () {
    document.body.classList.toggle("chaos");

    if (document.body.classList.contains("chaos")) {
        chaosBtn.innerText = "😈 Disable Chaos";
    } else {
        chaosBtn.innerText = "🔥 Chaos Mode";
    }
});

// =======================================
// MUSIC TOGGLE WITH FADE
// =======================================
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");

if (music) {
    music.volume = 0.5;
}

function fadeIn(audio) {
    audio.volume = 0;
    audio.play();
    let vol = 0;

    const interval = setInterval(() => {
        if (vol < 0.5) {
            vol += 0.05;
            audio.volume = vol;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

function fadeOut(audio) {
    let vol = audio.volume;

    const interval = setInterval(() => {
        if (vol > 0.05) {
            vol -= 0.05;
            audio.volume = vol;
        } else {
            clearInterval(interval);
            audio.pause();
        }
    }, 100);
}

safeAddListener(musicBtn, "click", function () {
    if (!music) return;

    if (music.paused) {
        fadeIn(music);
        musicBtn.innerText = "⏸ Pause Music";
    } else {
        fadeOut(music);
        musicBtn.innerText = "🎵 Play Music";
    }
});

// =======================================
// RIPPLE BUTTON EFFECT
// =======================================
document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const rect = button.getBoundingClientRect();
        circle.style.left = `${e.clientX - rect.left}px`;
        circle.style.top = `${e.clientY - rect.top}px`;

        button.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
});
