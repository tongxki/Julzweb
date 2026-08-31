document.addEventListener("DOMContentLoaded", function() {
            
            // --- Scroll Animations ---
            const hiddenElements = document.querySelectorAll('.hidden');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            }, {
                threshold: 0.1, 
                rootMargin: "0px 0px -50px 0px" 
            });

            hiddenElements.forEach((el) => observer.observe(el));

            // --- Mobile Navigation Toggle ---
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');
            const navItems = document.querySelectorAll('.nav-item');

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                // Toggle between bars and X icon
                if(navLinks.classList.contains('active')){
                    hamburger.classList.remove('fa-bars');
                    hamburger.classList.add('fa-xmark');
                } else {
                    hamburger.classList.remove('fa-xmark');
                    hamburger.classList.add('fa-bars');
                }
            });

            // Close mobile menu when a link is clicked
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('fa-xmark');
                    hamburger.classList.add('fa-bars');
                });
            });

            // --- Testimonial Carousel ---
            const slides = document.querySelectorAll('.testimonial-slide');
            const dots = document.querySelectorAll('.testimonial-dot');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');

            if (slides.length > 0) {
                let currentSlide = 0;

                const showSlide = (index) => {
                    currentSlide = (index + slides.length) % slides.length;

                    slides.forEach((slide, i) => {
                        slide.classList.toggle('active', i === currentSlide);
                    });

                    dots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === currentSlide);
                    });
                };

                prevBtn?.addEventListener('click', () => showSlide(currentSlide - 1));
                nextBtn?.addEventListener('click', () => showSlide(currentSlide + 1));

                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => showSlide(index));
                });

                setInterval(() => {
                    showSlide(currentSlide + 1);
                }, 5000);
            }
        });