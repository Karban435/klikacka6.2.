const box = document.getElementById("box");
const title = document.getElementById("score");
let points = 0;

function pointsText(text) {
    title.textContent = text;
}

function spawnCircle(color) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.backgroundColor = color;
    
    let x = Math.random() * (400 - 20);
    let y = Math.random() * (400 - 20);
    
    let dx = (Math.random() - 0.5) * 4;
    let dy = (Math.random() - 0.5) * 4;
    
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    box.appendChild(circle);
    
    function move() {
        x += dx;
        y += dy;
        
        if (x <= 0 || x >= 380) dx *= -1;
        if (y <= 0 || y >= 380) dy *= -1;
        
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        
        requestAnimationFrame(move);
    }
    move();
    
    circle.addEventListener("click", () => {
        points++
        updateScore();
        resetCircles();

    });
}

function updateScore() {
    title.textContent = `Score: ${points}`;
}

function resetCircles() {
    box.innerHTML = "";
    spawnCircle("red");
    spawnCircle("blue");
    spawnCircle("green");
}

spawnCircle("red");
spawnCircle("blue");
spawnCircle("green");
