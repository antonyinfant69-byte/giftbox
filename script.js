/* script.js */

// 1. Make the No button move
function moveNoButton() {
    const btn = document.getElementById('noBtn');
    // Calculate random position within the window
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// 2. Handle the Yes click
function handleYes() {
    document.getElementById('main-card').classList.add('hidden');
    document.getElementById('gift-section').classList.remove('hidden');
    document.body.style.backgroundColor = "#ffebf0"; // Change background to light pink
}

// 3. Create flying hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);
function openGift(num) {

    if (num === 1) {

        const btn = document.createElement("button");
        btn.innerText = "▶ Play Song";

        btn.style.position = "fixed";
        btn.style.bottom = "40px";
        btn.style.left = "50%";
        btn.style.transform = "translateX(-50%)";
        btn.style.padding = "15px 25px";
        btn.style.fontSize = "18px";
        btn.style.borderRadius = "12px";
        btn.style.background = "#ff4d6d";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.zIndex = "999";

        btn.onclick = function () {
            document.getElementById("loveSong").play();
        };

        document.body.appendChild(btn);
    }

    if (num === 2) alert("Our Memories 📸");
    if (num === 3) alert("A Letter ✉️");
    if (num === 4) alert("The Agreement 📜");
}