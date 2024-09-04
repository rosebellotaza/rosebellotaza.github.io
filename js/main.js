document.addEventListener("DOMContentLoaded", function () {
    // Handle scroll spy
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('.resume-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3 // Adjust the threshold to when animation should start
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Portfolio filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-items');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            portfolioItems.forEach(item => {
                if (filter === 'all' && item.classList.contains('all')) {
                    item.style.display = 'block';
                } else if (filter === 'app' && item.classList.contains('app')) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll(".progress-bar");

    function animateProgressBars() {
        skillBars.forEach((bar) => {
            const percentage = bar.textContent.trim();
            bar.style.width = percentage;
        });
    }

    function resetProgressBars() {
        skillBars.forEach((bar) => {
            bar.style.width = "0%";
        });
    }

    const skillsSection = document.getElementById("skills");
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateProgressBars();
            } else {
                resetProgressBars();
            }
        });
    }, {
        threshold: 0.8
    });

    skillsObserver.observe(skillsSection);
});
