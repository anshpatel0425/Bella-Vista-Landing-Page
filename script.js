// Hamburger menu toggle
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    toggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        toggle.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', false);
        });
    });

    // Section title scroll animation
    const titles = document.querySelectorAll('.section-title');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });

    titles.forEach(t => {
        t.style.opacity = '0';
        t.style.transform = 'translateY(20px)';
        t.style.transition = 'all 0.8s ease';
        observer.observe(t);
    });