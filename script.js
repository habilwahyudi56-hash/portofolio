// Smooth scrolling untuk navigasi (ringan, no loop)
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

// Animasi masuk saat scroll (IntersectionObserver - ringan dan efisien)
const observerOptions = {
    threshold: 0.1, // Trigger saat 10% elemen keliatan
    rootMargin: '0px 0px -50px 0px' // Mulai animasi sedikit sebelum elemen muncul
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Aktifkan animasi
            observer.unobserve(entry.target); // Hanya sekali, biar nggak berulang
        }
    });
}, observerOptions);

// Observe semua elemen dengan class animate-on-scroll
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});
