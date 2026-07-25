/* ==========================================================================
   MAIN.JS
   Utilidades generales que no encajan en un módulo específico.
   Se carga al final para asegurarse de que el resto del DOM ya existe.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
