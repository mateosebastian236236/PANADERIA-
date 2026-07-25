# Di'Aroma Bakery — Sitio Web

Sitio web mobile-first para Di'Aroma Bakery, construido con HTML5 semántico,
CSS3 (Flexbox + Grid) y JavaScript puro (sin frameworks ni dependencias).

## Estructura del proyecto

```
Pagina Di Aroma/
├── index.html
├── css/
│   ├── variables.css      -> Paleta de colores, tipografías, espaciados
│   ├── reset.css          -> Normalización entre navegadores
│   ├── base.css           -> Tipografía y estilos base
│   ├── components.css     -> Botones, tarjetas, sello, formulario
│   ├── layout.css         -> Header, menú móvil, footer
│   ├── sections.css       -> Estilos de cada sección (mobile-first)
│   ├── animations.css     -> Animaciones puntuales
│   └── responsive.css     -> Breakpoints para tablet y escritorio
├── js/
│   ├── menu.js             -> Menú hamburguesa + header con sombra al hacer scroll
│   ├── scrollAnimations.js -> Revelado de secciones + botón "volver arriba"
│   ├── testimonials.js     -> Carrusel de testimonios
│   ├── formValidation.js   -> Validación del formulario de contacto
│   └── main.js             -> Utilidades generales (año en el footer)
├── assets/
│   ├── img/logo/       -> Colocar aquí el logo real (ver archivo .txt dentro)
│   ├── img/productos/  -> Fotos de productos
│   ├── img/hero/       -> Foto principal de la portada
│   ├── img/galeria/    -> Fotos de la sección "Galería"
│   └── favicon/        -> Ícono de pestaña del navegador
├── .gitignore
└── README.md
```

## Pendiente: reemplazar imágenes de muestra

El sitio funciona con recuadros con emojis a modo de marcador de posición
(🥐 🍞 🥖 🧁) para que la página se vea completa incluso sin fotos reales
todavía. Cada carpeta dentro de `assets/img/` tiene un archivo `.txt` con
instrucciones exactas de qué nombre de archivo usar y dónde editar el HTML.

## Cómo ver el sitio en tu computadora

No necesitas instalar nada complicado. Basta con:

1. Abrir la carpeta `Pagina Di Aroma` en Visual Studio Code.
2. Instalar la extensión **Live Server** (de Ritwick Dey) desde el
   ícono de extensiones en la barra lateral izquierda.
3. Clic derecho sobre `index.html` → **"Open with Live Server"**.
4. Se abrirá automáticamente en tu navegador en una dirección como
   `http://127.0.0.1:5500`.

## Control de versiones (Git y GitHub)

Ver la guía completa paso a paso en el documento
`GUIA_PASO_A_PASO.md` (sección 3). Resumen de comandos básicos una vez
configurado el repositorio:

```bash
git add .
git commit -m "Descripción breve del cambio"
git push
```

## Próximos pasos sugeridos

- Conectar el formulario de contacto a un servicio real de envío de
  correos (por ejemplo Formspree, EmailJS o un backend propio), ya que
  actualmente solo valida los campos pero no envía el mensaje.
- Reemplazar todos los recuadros con emoji por fotografías reales.
- Agregar Google Analytics o Plausible para medir visitas.
- Registrar un dominio propio (ej. diaromabakery.com) y publicar el
  sitio en un hosting (Netlify, Vercel o GitHub Pages son gratuitos
  para sitios estáticos como este).
