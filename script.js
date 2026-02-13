/* ===== CORAZONES INICIO ===== */

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 4 + 4) + 's';

    document.getElementById('heart-container').appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 120);

/* ===== BOTONES ===== */

const noBtn = document.getElementById('noBtn');
const siBtn = document.getElementById('siBtn');
const mainCard = document.getElementById('main-card');
const finalScreen = document.getElementById('final-screen');

/* Botón NO huye */
noBtn.addEventListener('mouseover', () => {
    noBtn.style.left = Math.random() * 80 + 'vw';
    noBtn.style.top = Math.random() * 80 + 'vh';
    noBtn.style.position = 'absolute';
});

/* ===== DESTELLOS ===== */

const sparkles = document.getElementById('sparkles');

function sparkle(x, y) {
    const s = document.createElement('span');
    s.style.left = x + 'px';
    s.style.top = y + 'px';
    sparkles.appendChild(s);
    setTimeout(() => s.remove(), 1000);
}

document.addEventListener('mousemove', e => {
    if (!finalScreen.classList.contains('hidden')) {
        sparkle(e.clientX, e.clientY);
    }
});

document.addEventListener('touchmove', e => {
    if (!finalScreen.classList.contains('hidden')) {
        sparkle(e.touches[0].clientX, e.touches[0].clientY);
    }
});

/* ===== EMOJIS FLOTANTES ===== */

const emojis = ['😍','🥰','😘','💖','💕'];

function createEmoji() {
    if (finalScreen.classList.contains('hidden')) return;

    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.fontSize = (Math.random() * 30 + 25) + 'px';
    emoji.style.animationDuration = (Math.random() * 4 + 4) + 's';

    document.getElementById('emoji-container').appendChild(emoji);
    setTimeout(() => emoji.remove(), 8000);
}

/* ===== ACTIVAR FINAL ===== */

siBtn.addEventListener('click', () => {
    mainCard.classList.add('hidden');
    finalScreen.classList.remove('hidden');
    setInterval(createEmoji, 180);
});
