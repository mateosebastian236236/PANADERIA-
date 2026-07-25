/* ==========================================================================
   SCROLLANIMATIONS.JS
   Responsable de:
   1) Revelar secciones suavemente cuando entran en pantalla (usa la
      clase .reveal definida en animations.css).
   2) Mostrar/ocultar el botón "volver arriba" según el scroll.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1) Revelado de elementos al hacer scroll ---------- */
  // Marcamos como "reveal" los bloques principales de cada sección.
  var revealTargets = document.querySelectorAll(
    '.hero__content, .about__visual, .about__content, .product-card, ' +
    '.process-step, .gallery-grid__item, .testimonial-slider, .contact__info, .contact__form'
  );

  revealTargets.forEach(function (el) {
    el.classList.add('reveal');
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // solo se anima una vez
        }
      });
    }, {
      threshold: 0.15
    });

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Si el navegador no soporta IntersectionObserver, mostramos todo directamente
    revealTargets.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- 2) Botón "volver arriba" ---------- */
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
