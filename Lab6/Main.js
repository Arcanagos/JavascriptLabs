const canvas = document.getElementById("Canvas");
let balls = [];
let ballCount = 0;
let captureRange = 0;
let drawing;

function start() {
  ballCount = parseInt(document.getElementById("liczbaKul").value);
  captureRange = parseInt(document.getElementById("zsgChwyt").value);
  drawing = canvas.getContext("2d");

  generateBalls(ballCount);
  draw();
}

function reset() {
  balls = [];
  drawing.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  drawing.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < balls.length; i++) {
    const ball1 = balls[i];

    trackBall(ball1);
    animateBall(ball1);
    trackLines(ball1, i);
  }

  requestAnimationFrame(draw);
}

function trackBall(ball) {
  drawing.beginPath();
  drawing.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  drawing.fillStyle = "green";
  drawing.fill();
  drawing.closePath();
}

function animateBall(ball) {
  ball.x += ball.movementX;
  ball.y += ball.movementY;

  if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
    ball.movementX *= -1;
  }
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.movementY *= -1;
  }
}

function generateBalls(ballCount) {
  for (let i = 0; i < ballCount; i++) {
    balls.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 5,
      movementX: (Math.random() - 0.5),
      movementY: (Math.random() - 0.5),
    });
  }
}

function trackLines(ball1, i) {
  for (let j = i + 1; j < balls.length; j++) {
    const ball2 = balls[j];
    const distance = Math.sqrt((ball1.x - ball2.x)**2 + (ball1.y - ball2.y)**2);

    if (distance < captureRange) {
      drawing.beginPath();
      drawing.moveTo(ball1.x, ball1.y);
      drawing.lineTo(ball2.x, ball2.y);
      drawing.strokeStyle = "red";
      drawing.stroke();
      drawing.closePath();
    }
  }
}
