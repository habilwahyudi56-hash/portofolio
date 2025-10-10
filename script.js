// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Variabel untuk deteksi arah scroll
let lastScrollY = window.scrollY;
let ticking = false;

// Fungsi animasi elemen (fade-in saat down)
function animateElement(el, direction) {
    if (direction === 'down') {
        el.classList.add('visible');
        el.classList.remove('hidden');
        console.log('Scroll DOWN: Fade-in', el.textContent || el.className); // Debug
    } else if (direction === 'up') {
        // Optional: Fade-out ringan saat up (komentar kalau nggak mau)
        // el.classList.add('hidden');
        // el.classList.remove('visible');
        console.log('Scroll UP: Navbar muncul'); // Debug
    }
}

// Deteksi arah scroll dan handle navbar
function handleScrollDirection() {
    if (ticking) return;
    ticking = true;

    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY ? 'down' : 'up';
    lastScrollY = currentScrollY;

    // Navbar: Hide saat down, show saat up (setelah scroll 100px)
    const navbar = document.querySelector('.sticky-nav');
    if (direction === 'down' && currentScrollY > 100) {
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    } else {
        navbar.classList.add('visible');
        navbar.classList.remove('hidden');
    }

    console.log('Arah scroll:', direction, 'Posisi Y:', currentScrollY); // Debug

    // Trigger animasi elemen berdasarkan direction (hanya saat down untuk fade-in)
    if (direction === 'down') {
        document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                animateElement(el, direction);
            }
        });
    }

    ticking = false;
    requestAnimationFrame(handleScrollDirection); // Efisien
}

// Event listener untuk scroll
window.addEventListener('scroll', handleScrollDirection);
handleScrollDirection(); // Jalankan awal

// Debug: Log awal
console.log('Scroll direction handler ready. Scroll down/up untuk test!');
