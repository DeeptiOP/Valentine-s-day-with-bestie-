// =============================
// WAIT UNTIL PAGE LOADS
// =============================
document.addEventListener("DOMContentLoaded", () => {

    const revealBtn = document.getElementById("reveal-btn");
    const prank = document.getElementById("prank");
    const music = document.getElementById("bg-music");

    // =============================
    // REVEAL SECRET BUTTON
    // =============================
    revealBtn.addEventListener("click", () => {

        // Show prank section
        prank.style.display = "block";

        // Typewriter prank text
        typeWriter(
            "You really thought this was romantic? 😂 Got you!",
            "prank-text"
        );

        // Activate chaos mode
        document.body.classList.add("chaos");
        document.body.classList.add("party-mode");

        // Play music
        if (music) {
            music.currentTime = 0;
            music.volume = 1;

            music.play()
                .then(() => console.log("Music playing"))
                .catch(err => console.log("Audio error:", err));
        }

        // Confetti effect
        for (let i = 0; i < 150; i++) {
            createConfetti();
        }

        // Disable button after click
        revealBtn.disabled = true;
        revealBtn.innerText = "💥 Magic Activated";
        revealBtn.style.cursor = "not-allowed";

    });

});


// =============================
// TYPEWRITER EFFECT
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
// CONFETTI EFFECT
// =============================
function createConfetti() {

    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";

    confetti.style.background =
        `hsl(${Math.random()*360},100%,50%)`;

    confetti.style.left =
        Math.random()*window.innerWidth + "px";

    confetti.style.top = "-10px";

    confetti.style.borderRadius = "50%";

    confetti.style.zIndex = "9999";

    confetti.style.animation =
        "fall 3s linear forwards";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
}


// =============================
// CONFETTI FALL ANIMATION
// =============================
const style = document.createElement("style");

style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}
`;

document.head.appendChild(style);
