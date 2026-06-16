function initAnimations() {
    document.body.classList.add("loaded");

    const revealElements = document.querySelectorAll('.reveal-el');

    if ('IntersectionObserver' in window) {
        const revealOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 0.05, 
            rootMargin: "10px 0px -10px 0px"
        });

        revealElements.forEach(el => revealOnScroll.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('active'));
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}

let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll < 0) return; 

    if (currentScroll > lastScroll && currentScroll > 80) {
        if (header) header.style.transform = "translateY(-100%)";
    } else {
        if (header) header.style.transform = "translateY(0)";
    }
    
    lastScroll = currentScroll;
});