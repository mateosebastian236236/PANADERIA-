/* ==========================================================================
   MENU.JS
   Responsable de:
   1) Abrir/cerrar el menú hamburguesa en móvil.
   2) Cerrar el menú al hacer clic en un enlace (mejor UX en móvil).
   3) Agregar una sombra al header cuando el usuario hace scroll.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('site-header');
  var navToggle = document.getElementById('nav-toggle');
  var primaryNav = document.getElementById('primary-nav');

  if (!navToggle || !primaryNav) return;

  function openMenu() {
    primaryNav.classList.add('is-open');
    navToggle.classList.add('is-active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // evita el scroll de fondo con el menú abierto
  }

  function closeMenu() {
    primaryNav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', function () {
    var isOpen = primaryNav.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cierra el menú automáticamente al elegir una sección (solo relevante en móvil)
  var navLinks = primaryNav.querySelectorAll('a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Sombra en el header cuando hay scroll
  function handleHeaderShadow() {
    if (window.scrollY > 10) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderShadow, { passive: true });
  handleHeaderShadow();
});
