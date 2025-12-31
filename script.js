// Personal Wish
let name = localStorage.getItem("name") || "Friend";
document.getElementById("wishText").innerText =
    "🎉 Happy New Year " + name + "! 🎉";

// Fireworks Animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;
    for (let i = 0; i < 50; i++) {
        particles.push({
            x,
            y,
            dx: (Math.random() - 0.5) * 5,
            dy: (Math.random() - 0.5) * 5,
            life: 100
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, index) => {
        p.x += p.dx;
        p.y += p.dy;
        p.life--;
        ctx.fillStyle = "gold";
        ctx.fillRect(p.x, p.y, 2, 2);
        if (p.life <= 0) particles.splice(index, 1);
    });
    requestAnimationFrame(animate);
}

setInterval(createFirework, 800);
animate();
