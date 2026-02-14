// =============================
// SCROLL REVEAL
// =============================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.2 });

reveals.forEach(r => observer.observe(r));


// =============================
// TYPEWRITER FUNCTION
// =============================
function typeWriter(text, id) {
    let i = 0;
    const el = document.getElementById(id);
    el.innerHTML = "";

    function typing() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    }
    typing();
}


// =============================
// CONFETTI CREATOR
// =============================
function createConfetti() {
    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.zIndex = "9999";
    confetti.style.borderRadius = "50%";
    confetti.style.animation = "fall 3s linear forwards";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
}


// Confetti Animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(720deg);
    }
}
`;
document.head.appendChild(style);


// =============================
// MAGIC BUTTON (MAIN CHAOS TRIGGER)
// =============================
const revealBtn = document.getElementById("reveal-btn");
const prank = document.getElementById("prank");
const music = document.getElementById("bg-music");

revealBtn.addEventListener("click", () => {

    // Show prank section
    prank.style.display = "block";
    typeWriter("You really thought this was romantic? 😂 Got you!", "prank-text");

    // Activate chaos + party mode
    document.body.classList.add("chaos");
    document.body.classList.add("party-mode");

    // Auto play music
    if (music && music.paused) {
        music.play().catch(err => console.log("Autoplay blocked:", err));
    }

    // Confetti rain
    for (let i = 0; i < 150; i++) {
        createConfetti();
    }

    // Disable button after first click
    revealBtn.disabled = true;
    revealBtn.innerText = "Magic Activated 💥";
    revealBtn.style.cursor = "not-allowed";
});


// =============================
// PARTY BOOSTER BUTTON
// =============================
const confettiBtn = document.getElementById("confetti-btn");

if (confettiBtn) {
    confettiBtn.addEventListener("click", () => {

        document.body.classList.add("party-mode");

        const msg = document.getElementById("party-message");
        msg.innerHTML = "Stay single forever like me 🤣🤣";
        msg.classList.add("show");

        for (let i = 0; i < 120; i++) {
            createConfetti();
        }

        document.getElementById("single-message").innerText =
            "Boom 💥 Chaos Activated!";
    });
}


// =============================
// CHAOS MODE TOGGLE
// =============================
const chaosBtn = document.getElementById("chaos-btn");

if (chaosBtn) {
    chaosBtn.onclick = () => {
        document.body.classList.toggle("chaos");
    };
}


// =============================
// MUSIC TOGGLE BUTTON
// =============================
const musicBtn = document.getElementById("music-btn");

if (musicBtn) {
    musicBtn.onclick = () => {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    };
}


// =============================
// FLOATING HEART CANVAS
// =============================
const canvas = document.getElementById("heart-canvas");

if (canvas) {

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hearts = [];

    for (let i = 0; i < 40; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 20 + 10,
            speed: Math.random() * 1 + 0.5
        });
    }

    function drawHeart(x, y, size) {
        ctx.fillStyle = "rgba(255,105,180,0.6)";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - size / 2, x - size / 2, y - size / 2, x - size / 2, y);
        ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size / 1.5, x, y + size);
        ctx.bezierCurveTo(x, y + size / 1.5, x + size / 2, y + size / 2, x + size / 2, y);
        ctx.bezierCurveTo(x + size / 2, y - size / 2, x, y - size / 2, x, y);
        ctx.fill();
    }

    function animateHearts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        hearts.forEach(h => {
            drawHeart(h.x, h.y, h.size);
            h.y -= h.speed;

            if (h.y < 0) {
                h.y = canvas.height;
                h.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animateHearts);
    }

    animateHearts();
}


// =============================
// ROTATE PRANK IMAGE ON SCROLL
// =============================
const prankImg = document.querySelector(".prank-img");

window.addEventListener("scroll", () => {

    if (prankImg) {

        const rect = prankImg.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {

            let scrollPercent = (windowHeight - rect.top) / windowHeight;
            let rotation = scrollPercent * 360;

            prankImg.style.transform = `rotate(${rotation}deg)`;
        }
    }
});
