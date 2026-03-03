// Typing animation
const message = "This little page is just for you 🌷";
let i = 0;

function typeText(){
    if(i < message.length){
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeText, 50);
    }
}

typeText();

// Unlock surprise
const btn = document.getElementById("unlockBtn");

btn.addEventListener("click", () => {

    document.getElementById("surprise").classList.remove("hidden");
    btn.disabled = true;
    document.getElementById("music").play();

    createConfetti();
});

// Confetti effect
function createConfetti(){
    for(let i=0;i<120;i++){
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random()*100 + "vw";
        confetti.style.backgroundColor =
            `hsl(${Math.random()*360},100%,50%)`;

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },3000);
    }
}
