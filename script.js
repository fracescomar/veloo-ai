// Smooth scrolling and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Verifica che EmailJS sia caricato
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS non è caricato! Controlla la connessione internet.');
        return;
    }
    
    // Inizializza EmailJS
    console.log('Inizializzazione EmailJS...');
    emailjs.init("9IkisWPHJ0DNVge01"); // Chiave pubblica EmailJS
    console.log('EmailJS inizializzato con successo!');
    
    // Get modal elements
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close-btn');
    const contactForm = document.getElementById('contactForm');
    
    // Add floating animation to particles on scroll
    function addScrollAnimations() {
        const particles = document.querySelectorAll('.particle');
        const planet = document.querySelector('.blue-planet');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            particles.forEach((particle, index) => {
                const speed = (index + 1) * 0.3;
                particle.style.transform = `translateY(${rate * speed}px)`;
            });
            
            if (planet) {
                planet.style.transform = `translateY(${rate * 0.2}px)`;
            }
        });
    }
    
    addScrollAnimations();
    
    // Add click event listeners to all buttons
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            createRipple(e, this);
            
            // Handle button actions
            const buttonText = this.textContent.toLowerCase();
            
            if (buttonText.includes('contatt') || buttonText.includes('demo')) {
                openModal();
            }
        });
    });
    
    // Modal functionality
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Animate form fields
        const formGroups = modal.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            group.style.opacity = '0';
            group.style.transform = 'translateY(20px)';
            setTimeout(() => {
                group.style.transition = 'all 0.5s ease';
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
        contactForm.reset(); // Reset form
    }
    
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside of it
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading animation to submit button
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Invio in corso...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(contactForm);
        const templateParams = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            company: formData.get('company') || 'Non specificata',
            useCase: formData.get('useCase') || 'Non specificato',
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            date: new Date().toLocaleDateString('it-IT', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        
        // Invia email usando EmailJS
        console.log('Tentativo di invio email con parametri:', templateParams);
        console.log('Service ID:', 'service_gkpglyb');
        console.log('Template ID:', 'template_m05afaa');
        
        emailjs.send('service_gkpglyb', 'template_m05afaa', templateParams)
            .then(function(response) {
                console.log('Email inviata con successo!', response.status, response.text);
                showSuccessMessage(templateParams.firstName);
                closeModal();
                contactForm.reset();
            })
            .catch(function(error) {
                console.error('Errore dettagliato nell\'invio email:', error);
                console.error('Messaggio errore:', error.text || error.message);
                console.error('Status errore:', error.status);
                showErrorMessage('Si è verificato un errore durante l\'invio. Riprova più tardi.');
            })
            .finally(function() {
                // Ripristina il bottone
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
    
    function showSuccessMessage(firstName) {
        // Crea un toast di successo
        const toast = document.createElement('div');
        toast.className = 'success-toast';
        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-icon">✅</div>
                <div class="toast-text">
                    <strong>Grazie ${firstName}!</strong><br>
                    La tua richiesta è stata inviata con successo. Ti ricontatteremo presto!
                </div>
                <button class="toast-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Chiudi il toast automaticamente dopo 5 secondi
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 5000);
        
        // Chiudi il toast quando si clicca sulla X
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.remove();
        });
        
        // Anima l'entrata del toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
    }
    
    function showErrorMessage(errorMsg) {
        // Crea un toast di errore
        const toast = document.createElement('div');
        toast.className = 'error-toast';
        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-icon">❌</div>
                <div class="toast-text">
                    <strong>Errore!</strong><br>
                    ${errorMsg}
                </div>
                <button class="toast-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Chiudi il toast automaticamente dopo 5 secondi
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 5000);
        
        // Chiudi il toast quando si clicca sulla X
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.remove();
        });
        
        // Anima l'entrata del toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
    }
    
    // Add parallax effect to gradient orbs and planet
    document.addEventListener('mousemove', function(e) {
        const orbs = document.querySelectorAll('.gradient-orb');
        const planet = document.querySelector('.blue-planet');
        const particles = document.querySelectorAll('.particle');
        
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Animate orbs
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 50;
            const y = (mouseY - 0.5) * speed * 50;
            
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        // Animate planet with slower movement
        if (planet) {
            const planetX = (mouseX - 0.5) * 30;
            const planetY = (mouseY - 0.5) * 30;
            planet.style.transform = `translate(${planetX}px, ${planetY}px)`;
        }
        
        // Animate particles
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.3;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.hero-title, .hero-subtitle, .cta-buttons');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // Trigger animations after a short delay
    setTimeout(() => {
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 300);
});

// Create ripple effect on button click
function createRipple(event, button) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Add CSS for ripple effect and animations
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(59, 130, 246, 0.6);
        transform: scale(0);
        animation: ripple 600ms linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    button {
        position: relative;
        overflow: hidden;
    }
    
    .form-group {
        transition: all 0.5s ease;
    }
    
    /* Toast Notifications */
    .success-toast,
    .error-toast {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        min-width: 320px;
        max-width: 400px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        animation: slideInRight 0.3s ease-out forwards;
    }
    
    .success-toast {
        border-left: 4px solid #10b981;
    }
    
    .error-toast {
        border-left: 4px solid #ef4444;
    }
    
    .success-toast.show,
    .error-toast.show {
        transform: translateX(0);
    }
    
    .toast-content {
        display: flex;
        align-items: flex-start;
        padding: 16px;
        gap: 12px;
    }
    
    .toast-icon {
        font-size: 20px;
        flex-shrink: 0;
        margin-top: 2px;
    }
    
    .toast-text {
        flex: 1;
        color: #374151;
        line-height: 1.5;
    }
    
    .toast-text strong {
        color: #1f2937;
        font-weight: 600;
    }
    
    .toast-close {
        background: none;
        border: none;
        font-size: 18px;
        color: #9ca3af;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.2s ease;
        flex-shrink: 0;
    }
    
    .toast-close:hover {
        background: rgba(156, 163, 175, 0.1);
        color: #6b7280;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @media (max-width: 480px) {
        .success-toast,
        .error-toast {
            top: 10px;
            right: 10px;
            left: 10px;
            min-width: auto;
            max-width: none;
        }
        
        .toast-content {
            padding: 12px;
        }
        
        .toast-text {
            font-size: 14px;
        }
    }
`;
document.head.appendChild(style); 