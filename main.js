 // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            });
        });

        // Modal functionality for registration
        const modal = document.getElementById('registrationModal');
        const closeModal = document.querySelector('.close-modal');
        const registerBtns = document.querySelectorAll('.register-btn');
        const eventNameField = document.getElementById('eventName');
        const registrationForm = document.getElementById('registrationForm');

        registerBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const eventName = this.getAttribute('data-event');
                eventNameField.value = eventName;
                modal.style.display = 'flex';
            });
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Form submission
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Registration successful! We will contact you soon.');
            modal.style.display = 'none';
            registrationForm.reset();
        });

        // Animate elements on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.detail-card, .event-card, .gallery-item');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Set initial state for animated elements
        document.querySelectorAll('.detail-card, .event-card, .gallery-item').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        
        // Add confetti effect on hero section
        function createConfetti() {
            const colors = ['#8a2be2', '#ff00ff', '#00ffff', '#ffff00', '#ff5500'];
            const confettiCount = 50;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.style.position = 'absolute';
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = confetti.style.width;
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.top = Math.random() * 100 + 'vh';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.borderRadius = '50%';
                confetti.style.opacity = '0.7';
                confetti.style.zIndex = '1';
                document.querySelector('.hero').appendChild(confetti);
                
                // Animate confetti
                const animation = confetti.animate([
                    { transform: 'translateY(0px) rotate(0deg)', opacity: 0.7 },
                    { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 3000 + 2000,
                    easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
                });
                
                animation.onfinish = () => {
                    confetti.remove();
                };
            }
        }
        
        // Create confetti periodically
        setInterval(createConfetti, 3000);
        
        // Initial confetti on page load
        window.addEventListener('load', function() {
            setTimeout(createConfetti, 500);
        });