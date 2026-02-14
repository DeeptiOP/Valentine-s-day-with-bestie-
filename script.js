/* ================= CURSOR ================= */

const cursor = document.querySelector(".cursor");
const trail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", (e) => {
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

trail.style.left = e.clientX - 10 + "px";
trail.style.top = e.clientY - 10 + "px";
});

/* ================= ROTATE IMAGE ON SCROLL ================= */

const prankImg = document.getElementById("prankImg");

window.addEventListener("scroll", () => {
let rotation = window.scrollY * 0.1;
prankImg.style.transform =
`translate(-50%, -50%) rotate(${rotation}deg)`;
});

/* ================= CANVAS EFFECTS ================= */

const canvas = document.getElementById("effects");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* ================= PARTY FUNCTION ================= */

function activateParty(){

document.body.classList.add("party-mode");
document.getElementById("party-message").classList.add("show");

const music = document.getElementById("music");
music.play();

/* Confetti Burst */

for(let i = 0; i < 250; i++){
ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
ctx.fillRect(
Math.random()*canvas.width,
Math.random()*canvas.height,
6,
6
);
}

}

/* ================= REVEAL FUNCTION ================= */

function revealSecret(){
alert("You expected romance... but got full chaos 😂");
  }
