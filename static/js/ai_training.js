document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Countdown Timer Removed ---

    // --- 2. Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // --- 4. Rotating Text in Hero ---
    const words = ["Create", "Innovate", "Build", "Learn AI", "Explore the Future"];
    let wordIndex = 0;
    const wordElement = document.getElementById('rotating-word');
    
    if (wordElement) {
        setInterval(() => {
            // Fade out
            wordElement.style.opacity = 0;
            setTimeout(() => {
                wordIndex = (wordIndex + 1) % words.length;
                wordElement.innerText = words[wordIndex];
                // Fade in
                wordElement.style.opacity = 1;
            }, 500);
        }, 3000);
    }

    // --- 5. Floating Notifications ---
    const notifications = [
        "David from Lagos just enrolled",
        "Only 12 slots remaining",
        "Early bird ending soon",
        "Registration ongoing",
        "Sarah from Abuja just enrolled",
        "5 students enrolled today"
    ];
    
    const notifElement = document.getElementById('floating-notification');
    const notifText = document.getElementById('notif-text-content');
    const notifTime = document.getElementById('notif-time');
    
    if (notifElement) {
        const showNotification = () => {
            const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
            const randomTime = Math.floor(Math.random() * 15) + 1; // 1 to 15 mins ago
            
            notifText.innerText = randomNotif;
            notifTime.innerText = `${randomTime} min ago`;
            
            notifElement.classList.add('show');
            
            setTimeout(() => {
                notifElement.classList.remove('show');
            }, 5000);
        };
        
        // Show first notification after 5 seconds, then every 20 seconds
        setTimeout(() => {
            showNotification();
            setInterval(showNotification, 20000);
        }, 5000);
    }

    // --- 6. Registration Modal ---
    const modal = document.getElementById('reg-modal');
    const openBtns = document.querySelectorAll('.open-modal-btn');
    const closeBtn = document.querySelector('.close-modal');
    
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    // Close modal on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- 7. Form Submission ---
    const form = document.getElementById('registration-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data (if we were saving it locally)
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            console.log("Form submitted with data:", data);
            
            // Show loading state on button
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Redirecting to Paystack...';
            submitBtn.disabled = true;
            
            // Redirect to Paystack
            setTimeout(() => {
                window.location.href = "https://paystack.shop/pay/ai-summer-training";
            }, 1500);
        });
    }

    // --- 8. GSAP Scroll Animations ---
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animate section headers
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: header,
                    start: "top 80%",
                }
            });
        });

        // Animate feature cards
        gsap.fromTo('.glass-card.feature-card', 
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.features-grid',
                    start: "top 80%",
                }
            }
        );

        // Animate stats
        gsap.from('.stat-item', {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.stats-grid',
                start: "top 85%",
            }
        });
    // --- 9. Testimonial Slider ---
    const testimSlider = document.getElementById('testim-slider');
    const testimPrev = document.getElementById('testim-prev');
    const testimNext = document.getElementById('testim-next');

    if (testimSlider) {
        let slideInterval;
        
        const slideNext = () => {
            const firstCard = testimSlider.querySelector('.testimonial-card');
            if(!firstCard) return;
            const cardWidth = firstCard.offsetWidth + 30; // 30 is gap
            
            if (testimSlider.scrollLeft + testimSlider.clientWidth >= testimSlider.scrollWidth - 10) {
                testimSlider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                testimSlider.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        };

        const slidePrev = () => {
            const firstCard = testimSlider.querySelector('.testimonial-card');
            if(!firstCard) return;
            const cardWidth = firstCard.offsetWidth + 30;
            
            if (testimSlider.scrollLeft <= 0) {
                testimSlider.scrollTo({ left: testimSlider.scrollWidth, behavior: 'smooth' });
            } else {
                testimSlider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            }
        };

        if (testimNext) testimNext.addEventListener('click', () => {
            slideNext();
            resetInterval();
        });
        
        if (testimPrev) testimPrev.addEventListener('click', () => {
            slidePrev();
            resetInterval();
        });

        const startInterval = () => {
            slideInterval = setInterval(slideNext, 3000);
        };
        
        const resetInterval = () => {
            clearInterval(slideInterval);
            startInterval();
        };

        startInterval();
        
        testimSlider.addEventListener('mouseenter', () => clearInterval(slideInterval));
        testimSlider.addEventListener('mouseleave', startInterval);
    }

});
