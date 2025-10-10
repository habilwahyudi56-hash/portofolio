// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efek kilatan listrik acak di background (opsional)
function randomElectric() {
    const sparks = document.createElement('div');
    sparks.style.position = 'fixed';
    sparks.style.width = '2px';
    sparks.style.height = '2px';
    sparks.style.background = '#00ffff';
    sparks.style.left = Math.random() * 100 + 'vw';
    sparks.style.top = Math.random() * 100 + 'vh';
    sparks.style.animation = 'electric 0.5s ease-out forwards';
    sparks.style.zIndex = '1';
    document.body.appendChild(sparks);
    setTimeout(() => sparks.remove(), 500);
}

setInterval(randomElectric, 5000); // Kilatan setiap 5 detik
