// Typing Effect
const text = "Today is all about celebrating YOU 🌸";
let index = 0;

function typeEffect(){
    if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}

typeEffect();

// Floating Hearts
function createHearts(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHearts, 500);

// Reveal Surprise
const revealBtn = document.getElementById("revealBtn");

revealBtn.addEventListener("click", function(){
    document.getElementById("finalMessage").classList.remove("hidden");
    revealBtn.disabled = true;
    document.getElementById("music").play();
    createConfetti();
});

// Confetti
function createConfetti(){
    for(let i=0;i<150;i++){
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random()*100+"vw";
        confetti.style.backgroundColor = 
            `hsl(${Math.random()*360},100%,50%)`;
        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },3000);
    }
}
