// app.js
// Toda la funcionalidad de DISUEÑO portafolio

(function() {
  'use strict';

  // --- Modal de YouTube ---
  const modal = document.getElementById('videoModal');
  const showreelBtn = document.getElementById('showreelBtn');
  const closeModal = document.getElementById('closeModal');
  const youtubeFrame = document.getElementById('youtubeFrame');
  
  // 🔁 CAMBIA ESTA URL por la de tu video real de YouTube
  const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
  
  function openModal() {
    if (!modal) return;
    modal.classList.add('active');
    if (youtubeFrame) youtubeFrame.src = VIDEO_URL;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModalFunction() {
    if (!modal) return;
    modal.classList.remove('active');
    if (youtubeFrame) youtubeFrame.src = '';
    document.body.style.overflow = '';
  }
  
  if (showreelBtn) {
    showreelBtn.addEventListener('click', openModal);
  }
  if (closeModal) {
    closeModal.addEventListener('click', closeModalFunction);
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModalFunction();
    });
  }
  
  // --- Smooth scroll para enlaces internos (#inicio, #proyectos, etc.) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // --- Resaltar enlace activo en navegación según scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.md\\:hidden a, .hidden.md\\:flex a');
  
  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('text-primary');
        link.classList.add('text-on-surface-variant');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.remove('text-on-surface-variant');
          link.classList.add('text-primary');
        }
      });
    });
  }

})();