(function() {
  const btn = document.getElementById('enviar-btn');
  const nombre = document.getElementById('nombre');
  const telefono = document.getElementById('telefono');
  const objetivo = document.getElementById('objetivo');
  const mensaje = document.getElementById('mensaje');

  btn.addEventListener('click', () => {
    if (!nombre.value.trim() || !telefono.value.trim()) {
      alert('Por favor llena nombre y teléfono.');
      return;
    }
    const texto = encodeURIComponent(
      `Hola Ady, soy ${nombre.value.trim()}.\nTel: ${telefono.value.trim()}\nObjetivo: ${objetivo.value}\nMensaje: ${mensaje.value.trim() || '---'}`
    );
    const url = `https://wa.me/523129433641?text=${texto}`;
    window.open(url, '_blank');
  });

  // Reveal-on-scroll para secciones
  const sections = document.querySelectorAll('main section');
  sections.forEach(sec => sec.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));
})();
      const navToggle = document.querySelector('.nav-toggle');
      const navLinks = document.querySelector('.nav-links');
      const navAnchors = document.querySelectorAll('.nav-links a');

      if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
          const isOpen = navLinks.classList.toggle('is-open');
          navToggle.classList.toggle('is-open', isOpen);
          navToggle.setAttribute('aria-expanded', isOpen);
        });

        navAnchors.forEach(link => {
          link.addEventListener('click', () => {
            navLinks.classList.remove('is-open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
          });
        });
      }
