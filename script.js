// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.2});
reveals.forEach(r=>observer.observe(r));


// Reveal Secret Button
const revealBtn = document.getElementById("reveal-btn");
const prank = document.getElementById("prank");

revealBtn.addEventListener("click",()=>{
prank.style.display="block";
typeWriter("You really thought this was romantic? 😂 Got you!", "prank-text");
});

function typeWriter(text,id){
let i=0;
const el=document.getElementById(id);
el.innerHTML="";
function typing(){
if(i<text.length){
el.innerHTML+=text.charAt(i);
i++;
setTimeout(typing,40);
}
}
typing();
}


// CONFETTI + PARTY BOOSTER
const confettiBtn = document.getElementById("confetti-btn");

confettiBtn.addEventListener("click",()=>{

// Party Background
document.body.classList.add("party-mode");

// Show Message
const msg=document.getElementById("party-message");
msg.innerHTML="Stay single forever like me 🤣🤣";
msg.classList.add("show");

// Confetti Rain
for(let i=0;i<150;i++){
createConfetti();
}

// Extra message
document.getElementById("single-message").innerText="Boom 💥 Chaos Activated!";
});

function createConfetti(){
const confetti=document.createElement("div");
confetti.style.position="fixed";
confetti.style.width="8px";
confetti.style.height="8px";
confetti.style.background=`hsl(${Math.random()*360},100%,50%)`;
confetti.style.left=Math.random()*window.innerWidth+"px";
confetti.style.top="-10px";
confetti.style.zIndex="9999";
confetti.style.borderRadius="50%";
confetti.style.animation="fall 3s linear forwards";
document.body.appendChild(confetti);
setTimeout(()=>confetti.remove(),3000);
}

// Confetti animation
const style=document.createElement("style");
style.innerHTML=`
@keyframes fall {
to {
transform:translateY(100vh) rotate(720deg);
}
}
`;
document.head.appendChild(style);


// Chaos Mode Button
document.getElementById("chaos-btn").onclick=()=>{
document.body.classList.toggle("chaos");
};


// Music Toggle
const music=document.getElementById("bg-music");
document.getElementById("music-btn").onclick=()=>{
music.paused?music.play():music.pause();
};


// Floating Heart Canvas
const canvas=document.getElementById("heart-canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let hearts=[];
for(let i=0;i<40;i++){
hearts.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*20+10,
speed:Math.random()*1+0.5
});
}

function drawHeart(x,y,size){
ctx.fillStyle="rgba(255,105,180,0.6)";
ctx.beginPath();
ctx.moveTo(x,y);
ctx.bezierCurveTo(x,y-size/2,x-size/2,y-size/2,x-size/2,y);
ctx.bezierCurveTo(x-size/2,y+size/2,x,y+size/1.5,x,y+size);
ctx.bezierCurveTo(x,y+size/1.5,x+size/2,y+size/2,x+size/2,y);
ctx.bezierCurveTo(x+size/2,y-size/2,x,y-size/2,x,y);
ctx.fill();
}

function animateHearts(){
ctx.clearRect(0,0,canvas.width,canvas.height);
hearts.forEach(h=>{
drawHeart(h.x,h.y,h.size);
h.y-=h.speed;
if(h.y<0){
h.y=canvas.height;
h.x=Math.random()*canvas.width;
}
});
requestAnimationFrame(animateHearts);
}
animateHearts();

// Rotate prank image on scroll
const prankImg = document.querySelector(".prank-img");

window.addEventListener("scroll", () => {

if(prankImg){

const rect = prankImg.getBoundingClientRect();
const windowHeight = window.innerHeight;

// Only rotate when image is visible
if(rect.top < windowHeight && rect.bottom > 0){

let scrollPercent = (windowHeight - rect.top) / windowHeight;

// Rotate up to 360 degrees
let rotation = scrollPercent * 360;

prankImg.style.transform = `rotate(${rotation}deg)`;

}
}

});


