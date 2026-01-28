const canvas = document.getElementById("neural-bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const nodes = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: Math.random() - 0.5,
  vy: Math.random() - 0.5
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  nodes.forEach(n => {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
    if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    ctx.fillStyle = "#7ef9ff";
    ctx.fillRect(n.x, n.y, 2, 2);
  });
  requestAnimationFrame(animate);
}
animate();
