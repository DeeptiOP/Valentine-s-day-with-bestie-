// Reveal prank on button click
document.getElementById('reveal-btn').addEventListener('click', function() {
    document.getElementById('prank').style.display = 'block';
    document.getElementById('message').innerHTML = "Muahaha! Gotcha! 😈";
});

// Confetti effect (simple canvas-based)
document.getElementById('confetti-btn').addEventListener('click', function() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Simple confetti particles
    for (let i = 0; i < 100; i++) {
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 5, 5);
    }
    setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 3000);
});

// Prank mode: Change the whole page
document.getElementById('prank-mode').addEventListener('click', function() {
    document.body.innerHTML = `
        <h1>Prank Activated! 🐱</h1>
        <p>Everything is now cats! Meow Valentine's Day!</p>
        <img src="https://via.placeholder.com/400x300?text=Cat+Prank" alt="Cat meme">
        <button onclick="location.reload()">Reset (or not? 😏)</button>
    `;
});
