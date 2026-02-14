// Scroll Reveal
const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.2});
reveals.forEach(r=>observer.observe(r));

// Cursor Glow
const cursor=document.querySelector(".cursor");
const trail=document.querySelector(".cursor-trail");

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
trail.style.left=e.clientX-10+"px";
trail.style.top=e.clientY-10+"px";
});

// Floating Heart Particles
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

// Chaos Mode
document.getElementById("chaos-btn").onclick=()=>{
document.body.classList.toggle("chaos");
};

// Music
const music=document.getElementById("bg-music");
document.getElementById("music-btn").onclick=()=>{
music.paused?music.play():music.pause();
};
