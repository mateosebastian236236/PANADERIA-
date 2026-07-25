/* ==========================================================================
   FORMVALIDATION.JS
   Validación del formulario de contacto + envío por WhatsApp.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var successMessage = document.getElementById('form-success');

  // Número de WhatsApp REAL (sin +, sin espacios, solo dígitos)
  var WHATSAPP_NUMBER = '593987508355';

  var validators = {
    name: function (value) {
      return value.trim().length >= 2 ? '' : 'Escribe tu nombre completo.';
    },
    email: function (value) {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(value.trim()) ? '' : 'Ingresa un correo electrónico válido.';
    },
    phone: function (value) {
      var digits = value.replace(/\D/g, '');
      return digits.length >= 10 ? '' : 'Ingresa un número de teléfono válido (mínimo 10 dígitos).';
    },
    message: function (value) {
      return value.trim().length >= 10 ? '' : 'Cuéntanos un poco más (mínimo 10 caracteres).';
    }
  };

  function showError(field, message) {
    var formField = field.closest('.form-field');
    var errorEl = formField.querySelector('.form-error');
    formField.classList.toggle('has-error', Boolean(message));
    if (errorEl) errorEl.textContent = message;
  }

  function validateField(field) {
    var validator = validators[field.name];
    if (!validator) return true;
    var message = validator(field.value);
    showError(field, message);
    return message === '';
  }

  // Validar en tiempo real al salir del campo
  ['name', 'email', 'phone', 'message'].forEach(function (fieldName) {
    var field = form.elements[fieldName];
    if (field) {
      field.addEventListener('blur', function () {
        validateField(field);
      });
    }
  });

  // ----- ENVÍO POR WHATSAPP (sin emojis, formato limpio) -----
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var isFormValid = true;
    ['name', 'email', 'phone', 'message'].forEach(function (fieldName) {
      var field = form.elements[fieldName];
      if (field && !validateField(field)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      successMessage.hidden = true;
      return;
    }

    // Recoger datos del formulario
    var name = form.elements['name'].value.trim();
    var email = form.elements['email'].value.trim();
    var phone = form.elements['phone'].value.trim();
    var message = form.elements['message'].value.trim();

    // Construir mensaje para WhatsApp (formato limpio, sin emojis)
    var whatsappMessage =
      'Nuevo pedido / reserva desde la web%0A' +
      '---%0A' +
      'Nombre: ' + encodeURIComponent(name) + '%0A' +
      'Correo: ' + encodeURIComponent(email) + '%0A' +
      'Teléfono: ' + encodeURIComponent(phone) + '%0A' +
      'Mensaje: ' + encodeURIComponent(message);

    var whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + whatsappMessage;

    // Mostrar mensaje de éxito
    successMessage.hidden = false;
    form.reset();

    // Abrir WhatsApp después de 1 segundo
    setTimeout(function () {
      window.open(whatsappUrl, '_blank');
      successMessage.hidden = true;
    }, 1000);
  });
});