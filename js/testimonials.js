/* ==========================================================================
   TESTIMONIALS.JS
   Carrusel simple (sin librerías externas) para la sección de
   testimonios. Genera los puntos de navegación automáticamente según
   la cantidad de tarjetas encontradas en el HTML.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var track = document.getElementById('testimonial-track');
  var dotsContainer = document.getElementById('testimonial-dots');

  if (!track || !dotsContainer) return;

  var slides = track.children;
  var totalSlides = slides.length;
  var currentIndex = 0;
  var autoplayInterval;

  // Genera un botón (punto) por cada testimonio
  for (var i = 0; i < totalSlides; i++) {
    var dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Ver testimonio ' + (i + 1));
    dot.dataset.index = i;
    if (i === 0) dot.classList.add('is-active');
    dotsContainer.appendChild(dot);
  }

  var dots = dotsContainer.querySelectorAll('button');

  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = 'translateX(-' + (index * 100) + '%)';

    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle('is-active', dotIndex === index);
    });
  }

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goToSlide(parseInt(dot.dataset.index, 10));
      resetAutoplay();
    });
  });

  function nextSlide() {
    var nextIndex = (currentIndex + 1) % totalSlides;
    goToSlide(nextIndex);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 6000); // cambia cada 6 segundos
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  startAutoplay();
});
