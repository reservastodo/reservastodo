document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.background-container');
    // We add particles directly to the body or a dedicated layer to avoid being affected by the zoom animation on the background.
    const particleLayer = document.createElement('div');
    particleLayer.style.position = 'fixed';
    particleLayer.style.top = '0';
    particleLayer.style.left = '0';
    particleLayer.style.width = '100%';
    particleLayer.style.height = '100%';
    particleLayer.style.overflow = 'hidden';
    particleLayer.style.zIndex = '1';
    particleLayer.style.pointerEvents = 'none';
    document.body.insertBefore(particleLayer, document.querySelector('.overlay'));

    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particleLayer);
    }

    // Form Handling
    const emailForm = document.getElementById('email-form');
    const formContent = document.getElementById('form-content');
    const thankYouContent = document.getElementById('thank-you-content');

    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue y muestre error 405
            
            const email = this.querySelector('input[name="email"]').value;
            const submitBtn = this.querySelector('.submit-btn');
            
            // Estado de carga
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            // Para que este formulario realmente envíe el correo a vacacionesynegociosencolombia@gmail.com,
            // necesitas usar un servicio como Formspree.io o Web3Forms.
            // Ejemplo de cómo se vería la petición (descomentar y poner tu URL cuando la tengas):
            /*
            fetch('https://formspree.io/f/TU_ID_AQUI', {
                method: 'POST',
                body: new FormData(emailForm),
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                // Éxito
            }).catch(error => {
                // Error
            });
            */

            // Simulamos un retraso de red para la animación
            setTimeout(() => {
                formContent.style.display = 'none';
                thankYouContent.style.display = 'block';
            }, 800);
        });
    }
});

function createParticle(container) {
    const particle = document.createElement('div');
    
    // Style particle
    const size = Math.random() * 4 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = 'rgba(255, 255, 255, 0.4)';
    particle.style.position = 'absolute';
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.2)';
    
    // Initial position
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;
    
    // Animation properties
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * -20; // negative delay to start already in motion
    const moveX = (Math.random() - 0.5) * 30; // Move up to 15% left or right
    const moveY = (Math.random() - 0.5) * 30; // Move up to 15% up or down
    
    particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 0 },
        { opacity: Math.random() * 0.4 + 0.1, offset: 0.1 },
        { opacity: Math.random() * 0.4 + 0.1, offset: 0.9 },
        { transform: `translate(${moveX}vw, ${moveY}vh) scale(${Math.random() + 0.5})`, opacity: 0 }
    ], {
        duration: duration * 1000,
        delay: delay * 1000,
        iterations: Infinity,
        easing: 'ease-in-out'
    });
    
    container.appendChild(particle);
}
