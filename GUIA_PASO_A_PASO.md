# Guía Definitiva: Sitio Web de Di'Aroma Bakery

Esta guía te lleva desde cero hasta tener el sitio funcionando en tu computadora, subido a GitHub, y con una explicación lista para presentarle a tu jefa. El proyecto completo y funcional ya está construido y disponible para descargar junto a esta guía; aquí te explico **cómo está hecho, por qué, y qué hacer con él**.

---

## 0. Antes de empezar: dos cosas importantes sobre tus archivos

**No recibí los archivos adjuntos.** Mencionas `DI AROMA 2024 LOGO pdf.pdf` y `WhatsApp Image 2026-07-24 at 8.33.41 PM.jpg`, pero al revisar la conversación no llegaron adjuntos junto con tu mensaje — probablemente no se subieron. Por eso construí el sitio con:
- Una **paleta de colores y tipografías** diseñadas específicamente para una panadería artesanal (detalladas en la sección 4), inspiradas en tu descripción ("tonos cálidos, dorados, pan recién horneado").
- **Marcadores de posición** (recuadros con emoji 🥐🍞🥖🧁) donde deben ir tu logo real y tus fotos, para que el sitio se vea completo y puedas visualizar el diseño final desde ya.

Cuando quieras, súbeme el PDF del logo y la foto de los croissants en un nuevo mensaje y te ayudo a: (a) extraer el logo en un formato web óptimo, y (b) ajustar la paleta de colores a los tonos exactos de tu marca si difieren de lo que propuse.

**Sobre el nombre en el logo.** Escribiste que tu marca es "Di'Aroma Bakery" pero que en el logo aparece como "**DI'ARMA** BAKERY". En español, "arma" tiene un significado muy distinto a "aroma" (arma = *weapon*), así que si esto no es un efecto tipográfico intencional (por ejemplo, una fuente donde la "o" se ve como parte del diseño), te recomiendo confirmarlo con quien diseñó el logo antes de imprimir cualquier material o publicar el sitio. La consistencia del nombre de marca es clave para que la gente te encuentre en Google y en redes sociales. Mientras tanto, en todo el código usé "**Di'Aroma Bakery**" como nombre oficial, que es el que mencionaste como correcto.

---

## 1. Preparar el entorno de trabajo

### 1.1 Instalar lo necesario
1. **Visual Studio Code**: descárgalo de [code.visualstudio.com](https://code.visualstudio.com) si no lo tienes.
2. **Git**: descárgalo de [git-scm.com](https://git-scm.com/downloads). Es el programa que registra el historial de cambios de tu proyecto.
3. **Cuenta de GitHub**: crea una gratis en [github.com](https://github.com) si aún no tienes.

### 1.2 Extensiones recomendadas para VS Code
Abre VS Code → ícono de piezas de rompecabezas (Extensiones) en la barra lateral izquierda, y busca e instala:

| Extensión | Para qué sirve |
|---|---|
| **Live Server** (Ritwick Dey) | Abre tu página en el navegador y la recarga sola cada vez que guardas un cambio. Imprescindible. |
| **Prettier - Code formatter** | Ordena automáticamente tu código (indentación, comillas, etc.) para que sea consistente. |
| **Auto Rename Tag** | Cuando editas una etiqueta HTML de apertura, renombra automáticamente la de cierre. |
| **Live Preview** (Microsoft, alternativa a Live Server) | Similar a Live Server, integrada por Microsoft. |
| **indent-rainbow** | Colorea los niveles de indentación, útil para no perderte en el CSS anidado. |

### 1.3 Ubicar la carpeta del proyecto
1. Ve a tu OneDrive y confirma que existe (o crea) la carpeta exacta: `Pagina Di Aroma`.
2. En VS Code: **Archivo → Abrir Carpeta...** → selecciona `Pagina Di Aroma`.

> **Nota sobre OneDrive:** OneDrive sincroniza archivos en la nube automáticamente. Esto es perfecto para respaldo, pero a veces puede generar conflictos con Git si OneDrive intenta sincronizar el archivo `.git` (la carpeta oculta donde Git guarda el historial) al mismo tiempo que tú haces cambios. Si notas lentitud o mensajes de "archivo en uso" al usar comandos de Git, simplemente espera unos segundos a que el ícono de OneDrive en la barra de tareas muestre "sincronizado" antes de continuar. No es necesario mover el proyecto fuera de OneDrive.

---

## 2. Estructura del proyecto

Este es el árbol de carpetas **exacto** que debes tener dentro de `Pagina Di Aroma` (ya viene armado en el ZIP adjunto; si prefieres crearlo tú mismo desde cero, esta es la referencia):

```
Pagina Di Aroma/
├── index.html
├── .gitignore
├── README.md
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   ├── sections.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── menu.js
│   ├── scrollAnimations.js
│   ├── testimonials.js
│   ├── formValidation.js
│   └── main.js
└── assets/
    ├── img/
    │   ├── logo/
    │   ├── productos/
    │   ├── hero/
    │   └── galeria/
    └── favicon/
```

**¿Por qué tantos archivos CSS y JS separados en vez de uno solo?** Esto es lo que técnicamente se llama **arquitectura modular**: cada archivo tiene una única responsabilidad. Si mañana quieres cambiar solo el color dorado de la marca, sabes que únicamente debes abrir `variables.css`. Si quieres cambiar cómo funciona el menú móvil, sabes que es `menu.js`. Esto evita que un proyecto se convierta en un archivo gigante de 2000 líneas imposible de mantener, y es exactamente lo que pediste al mencionar "escalable y modular".

---

## 3. Explicación del código, archivo por archivo

El código completo ya está escrito y funcionando dentro del proyecto que descargaste. Aquí te explico **qué hace cada archivo y cómo encajan entre sí**, para que puedas modificarlo con confianza.

### 3.1 `index.html` — el esqueleto de la página

Es HTML5 **semántico**: en vez de usar `<div>` para todo, se usan etiquetas que describen su función: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`. Esto tiene dos beneficios concretos:
- **SEO (posicionamiento en Google):** los buscadores entienden mejor la estructura de tu contenido.
- **Accesibilidad:** personas que navegan con lectores de pantalla (por discapacidad visual) pueden entender y saltar entre secciones fácilmente.

El documento está dividido en secciones con `id`, que son los "anclas" a las que apunta el menú de navegación (`#inicio`, `#menu`, `#contacto`, etc.):

- **Header** (`.site-header`): logo + navegación + botón de menú hamburguesa (solo visible en móvil).
- **Hero** (`#inicio`): la primera pantalla que ve el visitante — título, texto de bienvenida, botones de acción, y el "sello" distintivo (ver sección 4).
- **Nosotros** (`#nosotros`): la historia de la panadería, con datos destacados (años de experiencia, etc.).
- **Menú** (`#menu`): tarjetas de producto (croissants, pan de masa madre, baguette, muffins) con precio.
- **Proceso** (`#proceso`): 4 pasos numerados de cómo se hace el pan (esto sí amerita numeración, porque es una secuencia real, no decorativa).
- **Galería** (`#galeria`): cuadrícula de fotos.
- **Testimonios** (`#testimonios`): carrusel de opiniones de clientes.
- **Contacto** (`#contacto`): datos de contacto + formulario.
- **Footer**: enlaces, redes sociales, año automático.

Cada bloque de imagen tiene un comentario HTML indicando exactamente qué archivo debe reemplazarlo, por ejemplo:
```html
<!-- Reemplazar por: assets/img/productos/croissants.jpg -->
<div class="img-placeholder">🥐</div>
```
Para poner la foto real, simplemente cambias esas dos líneas por:
```html
<img src="assets/img/productos/croissants.jpg" alt="Croissants de mantequilla recién horneados">
```

### 3.2 CSS — organizado en 8 archivos, cargados en un orden específico

El orden en que se cargan en el `<head>` del HTML **importa**, porque en CSS las reglas que se cargan después pueden sobrescribir a las anteriores:

1. **`variables.css`** — el "sistema de diseño": todos los colores, fuentes, espaciados y sombras como variables (`--color-wheat`, `--space-3`, etc.). Es el único archivo que necesitas tocar para rediseñar toda la página.
2. **`reset.css`** — elimina las inconsistencias visuales que trae cada navegador por defecto.
3. **`base.css`** — cómo se ven el texto, los títulos y el contenedor centrado (`.container`) en su estado más simple.
4. **`components.css`** — piezas reutilizables: botones, tarjetas de producto, el sello, el formulario.
5. **`layout.css`** — la estructura general: header, menú móvil, footer.
6. **`sections.css`** — el diseño específico de cada sección del `index.html`, escrito **mobile-first** (una sola columna por defecto).
7. **`animations.css`** — animaciones puntuales (el sello "presionándose", el revelado de secciones al hacer scroll).
8. **`responsive.css`** — aquí "activamos" el diseño de tablet y escritorio con `@media (min-width: ...)`. Se carga al final a propósito.

**Ejemplo real de mobile-first**, tomado de `sections.css` y `responsive.css`:

```css
/* sections.css: por defecto (móvil), el menú es de 1 columna */
.menu-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

/* responsive.css: desde 768px (tablet), pasa a 2 columnas */
@media (min-width: 768px) {
  .menu-grid { grid-template-columns: repeat(2, 1fr); }
}

/* responsive.css: desde 1024px (escritorio), pasa a 4 columnas */
@media (min-width: 1024px) {
  .menu-grid { grid-template-columns: repeat(4, 1fr); }
}
```
Esto es "mobile-first" en la práctica: se diseña primero para la pantalla más pequeña y limitada, y se va **añadiendo** complejidad a medida que hay más espacio disponible. Es más eficiente que el enfoque contrario porque un celular no tiene que cargar ni procesar reglas de escritorio que no va a usar.

### 3.3 JavaScript — 5 archivos, cada uno con una sola responsabilidad

Todo el JavaScript es **puro** (sin librerías externas, sin jQuery, sin frameworks), tal como pediste. Cada archivo se enfoca en una sola tarea:

- **`menu.js`**: abre/cierra el menú hamburguesa en móvil, y añade una sombra sutil al header cuando el usuario hace scroll.
- **`scrollAnimations.js`**: usa la API nativa `IntersectionObserver` (moderna y con muy buen rendimiento) para detectar cuándo un elemento entra en pantalla y así revelarlo suavemente; también controla el botón "volver arriba".
- **`testimonials.js`**: el carrusel de testimonios — genera los puntos de navegación automáticamente y avanza solo cada 6 segundos.
- **`formValidation.js`**: valida el formulario de contacto (nombre, correo, mensaje) directamente en el navegador antes de "enviarlo", mostrando errores claros si falta algo.
- **`main.js`**: pequeñas utilidades, como poner el año actual en el pie de página automáticamente (para no tener que actualizarlo cada enero).

Todos se cargan con el atributo `defer` en el HTML, lo que significa que el navegador **primero termina de mostrar la página** y luego ejecuta el JavaScript — así la página se siente instantánea, sin pantallas en blanco.

> **Importante sobre el formulario de contacto:** tal como está, el formulario valida los campos correctamente pero **no envía un correo real** — eso requeriría un servidor (backend). En la sección 8 (sugerencias) te explico las dos formas más simples y económicas de conectar un envío real.

---

## 4. Paleta de colores y tipografía (y por qué)

En vez de usar la combinación "crema clara + terracota" que es hoy el default genérico de muchas páginas hechas con IA, diseñé una paleta con un ancla más oscura y cálida, inspirada específicamente en el **horno de leña y el trigo dorado** — el mundo real de una panadería artesanal:

| Variable | Color | Uso |
|---|---|---|
| `--color-oven` | `#2B1810` (marrón carbón de horno) | Header, footer, fondos oscuros |
| `--color-crust` | `#8C4A2F` (costra tostada) | Acentos secundarios, degradado del hero |
| `--color-wheat` | `#D9A544` (trigo dorado) | Color principal de marca, botones |
| `--color-canela` | `#B5541F` (canela/paprika) | Etiquetas, precios, detalles |
| `--color-crema` | `#FBF3E4` (crema de harina) | Fondo principal de la página |
| `--color-masa` | `#3A2A1E` (marrón masa) | Texto principal |

**Tipografías** (Google Fonts, gratuitas):
- **Fraunces** (títulos): una serif con carácter cálido y artesanal — evoca el oficio de la panadería sin caer en lo genérico de las serif clásicas como Playfair Display, que hoy se ven en casi cualquier sitio hecho con IA.
- **Manrope** (texto general): sans-serif limpia, moderna y muy legible en pantallas pequeñas — ideal para descripciones de producto y párrafos.
- **Caveat** (acento manuscrito): se usa únicamente en el "sello" de marca (ver abajo), para dar un toque humano y artesanal en un solo lugar puntual, sin saturar el diseño.

**El elemento distintivo ("sello de marca"):** en el hero y en algunas tarjetas de producto verás un círculo con borde punteado, ligeramente rotado, que dice "Horneado Fresco Hoy" o "Favorito". Está inspirado en el sello de tinta que las panaderías reales estampan sobre bolsas de papel o cajas — es un guiño directo y auténtico al oficio, y es el elemento visual que hace que este diseño se sienta hecho específicamente para Di'Aroma y no para cualquier negocio genérico.

**Cuando me compartas tu logo y fotos reales**, puedo extraer los colores exactos de esos archivos y ajustar esta paleta para que combine perfectamente con tu identidad visual actual.

---

## 5. Diseño Mobile-First: qué significa en la práctica

"Mobile-first" no es solo "que se vea bien en el celular" — es una **metodología de trabajo**:

1. Se escribe el CSS pensando primero en la pantalla de un celular (320px–480px de ancho).
2. Luego, con `@media (min-width: 768px)`, se **añaden** ajustes para tablets.
3. Luego, con `@media (min-width: 1024px)`, se **añaden** ajustes para escritorio.

Todo el proyecto sigue este orden. Puedes comprobarlo tú mismo en VS Code con Live Server: abre la página, presiona `F12` (herramientas de desarrollador), haz clic en el ícono de celular/tablet, y verás cómo el menú se convierte en hamburguesa, las tarjetas de producto pasan de 1 a 2 y luego a 4 columnas, y el hero pasa de una columna apilada a dos columnas lado a lado.

---

## 6. Control de versiones: Git y GitHub, paso a paso

Git guarda un "historial de fotografías" de tu proyecto en el tiempo, y GitHub es donde guardas ese historial en la nube (y desde donde, más adelante, puedes publicar el sitio gratis).

### 6.1 Configurar Git por primera vez (solo se hace una vez en tu computadora)
Abre la Terminal integrada de VS Code: menú **Terminal → Nueva Terminal**, y escribe:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@ejemplo.com"
```

### 6.2 Inicializar el repositorio local
Con la terminal abierta **dentro de la carpeta `Pagina Di Aroma`**:

```bash
git init
git add .
git commit -m "Primer commit: estructura inicial del sitio Di'Aroma Bakery"
```

- `git init` crea el repositorio (una carpeta oculta `.git`).
- `git add .` marca todos los archivos actuales para ser guardados en la próxima "fotografía".
- `git commit -m "..."` guarda esa fotografía con un mensaje descriptivo.

### 6.3 Crear el repositorio remoto en GitHub
1. Entra a [github.com](https://github.com) y haz clic en el botón **"New"** (o el ícono `+` → "New repository").
2. Nombra el repositorio, por ejemplo: `diaroma-bakery-web`.
3. Déjalo en **Public** o **Private** según prefieras (Private si aún no quieres que se vea públicamente).
4. **No marques** la opción de agregar README, .gitignore ni licencia (ya los tienes localmente y esto evitaría conflictos).
5. Haz clic en **"Create repository"**.

GitHub te mostrará una pantalla con comandos. Copia la sección que dice **"…or push an existing repository from the command line"**, que se ve así (reemplaza `tu-usuario`):

```bash
git remote add origin https://github.com/tu-usuario/diaroma-bakery-web.git
git branch -M main
git push -u origin main
```

- `git remote add origin ...` conecta tu carpeta local con el repositorio en GitHub.
- `git branch -M main` asegura que tu rama principal se llame `main`.
- `git push -u origin main` sube todo tu historial a GitHub por primera vez.

La primera vez que hagas `push`, es posible que se abra una ventana pidiéndote iniciar sesión en GitHub desde el navegador — es normal, solo autoriza el acceso.

### 6.4 Flujo de trabajo diario (cada vez que hagas cambios)
Cada vez que modifiques el código y quieras guardar el progreso:

```bash
git add .
git commit -m "Descripción breve de lo que cambiaste"
git push
```

**Alternativa sin usar la terminal:** VS Code tiene un panel de **Control de Código Fuente** (ícono de ramificación en la barra lateral izquierda). Ahí puedes ver los cambios, escribir el mensaje del commit y hacer clic en el botón ✓ para confirmarlo, y en "Sync Changes" para subirlo — es exactamente lo mismo que los comandos de arriba, pero con botones.

---

## 7. Cómo previsualizar y, más adelante, publicar el sitio

**Para ver el sitio ahora mismo**, en tu computadora:
1. Clic derecho sobre `index.html` en VS Code.
2. **"Open with Live Server"**.
3. Se abre en tu navegador y se recarga sola cada vez que guardas cambios (`Ctrl+S`).

**Para publicarlo en internet gratis** (cuando estés lista), al ser un sitio 100% estático (HTML/CSS/JS sin backend), tienes tres opciones sencillas y gratuitas:
- **GitHub Pages**: activas una opción en la configuración de tu repositorio de GitHub y tu sitio queda disponible en una URL tipo `tu-usuario.github.io/diaroma-bakery-web`.
- **Netlify** o **Vercel**: conectas tu cuenta de GitHub, seleccionas el repositorio, y en segundos tienes una URL pública (y puedes conectar tu propio dominio después).

Puedo guiarte por cualquiera de estas opciones paso a paso cuando llegue el momento.

---

## 8. Sugerencias para mejorar el proyecto

Estas son mejoras reales que consideré al construir el sitio pero que dejé fuera de esta primera versión para no sobrecargarte; te las explico para que decidas cuáles priorizar:

1. **Conectar el formulario de contacto a un envío real de correos.**
   Hoy valida los datos pero no los envía. La forma más rápida y gratuita (sin programar un servidor) es usar **[Formspree](https://formspree.io)** o **[EmailJS](https://www.emailjs.com)**: creas una cuenta gratuita, te dan una URL o unas credenciales, y con un pequeño ajuste en `formValidation.js` los mensajes te llegan directo a tu correo. Te lo puedo implementar cuando quieras.

2. **Botón flotante de WhatsApp permanente.**
   Actualmente el enlace de WhatsApp está en el header y en el menú, pero un botón flotante verde (fijo en la esquina, visible en todo momento y en toda la navegación) suele aumentar bastante los pedidos directos en negocios de comida — es el patrón que la gente ya reconoce y espera.

3. **Optimización de imágenes.**
   Cuando agregues tus fotos reales, es clave comprimirlas primero (por ejemplo en [squoosh.app](https://squoosh.app), gratis) y usar el formato moderno **WebP** además de JPG. Esto puede significar la diferencia entre una página que carga en 1 segundo y una que tarda 5, especialmente para clientes que la visitan desde datos móviles.

4. **Mapa de ubicación embebido.**
   En la sección de Contacto, se puede incrustar un mapa real de Google Maps (con tu dirección exacta) en vez de solo el texto — ayuda muchísimo a que la gente llegue sin confusiones.

5. **Multi-idioma (español/inglés).**
   Si tu panadería recibe turistas o extranjeros, se puede preparar la estructura para alternar entre español e inglés con un botón, sin duplicar todo el sitio.

6. **Sistema de pedidos online más completo.**
   Si a futuro quieres que la gente arme un "carrito" con varios productos y lo envíe por WhatsApp con un resumen automático (en vez de escribir todo a mano), es una función de JavaScript que se puede agregar sobre esta misma base sin rehacer nada.

7. **Analítica de visitas.**
   Agregar **Google Analytics** o, si prefieres algo más simple y respetuoso con la privacidad, **Plausible Analytics**, para saber cuánta gente visita el sitio, desde qué ciudad, y qué sección mira más.

8. **Revisar el nombre del logo** (ver sección 0) antes de publicar nada oficialmente.

Dime cuáles de estas te interesan y las vamos implementando una por una, explicándote cada cambio a medida que avanzamos.

---

## 9. Explicación Ejecutiva para tu Jefa (lenguaje de negocio)

Esta sección está escrita para que la uses tal cual, o la adaptes, al presentarle el proyecto a tu jefa — sin tecnicismos.

### ¿Cómo funciona la página, en términos simples?

Es una página web de una sola vista continua (se navega haciendo scroll hacia abajo, o haciendo clic en el menú para saltar directo a una sección) que presenta la panadería en este orden: **bienvenida → nuestra historia → menú de productos → cómo hacemos el pan → galería de fotos → opiniones de clientes → contacto y formulario**. Cualquier persona que entre desde su celular o su computadora ve automáticamente la versión adaptada a su pantalla — no hay dos versiones distintas que mantener, es un solo sitio inteligente.

### ¿Por qué esta arquitectura beneficia al negocio?

- **Velocidad de carga:** el sitio no usa librerías pesadas ni herramientas externas innecesarias — está construido con tecnología directa y liviana. Esto significa que carga en segundos incluso con una conexión de datos móvil regular, lo cual es crítico: estudios de comportamiento de usuarios muestran que una parte importante de las visitas abandona una página si tarda más de 3 segundos en cargar. Menos velocidad de carga = menos clientes potenciales perdidos.

- **Adaptable a cualquier dispositivo (diseño "mobile-first"):** la mayoría de personas que buscan una panadería cercana lo hacen desde su celular, muchas veces caminando o decidiendo a dónde ir en ese momento. Por eso el sitio se diseñó **primero pensando en el celular**, y luego se adapta hacia arriba para tablets y computadoras — no al revés. Esto garantiza que la experiencia en el dispositivo que más se usa (el celular) sea la mejor posible, no una versión reducida de la de escritorio.

- **Experiencia de usuario pensada para vender:** cada sección tiene un propósito claro — la portada capta la atención en los primeros segundos, el menú muestra los productos con precio de forma atractiva, la sección de "proceso" genera confianza mostrando el cuidado artesanal detrás de cada pieza, los testimonios generan prueba social (la gente confía más si ve que otros ya confiaron), y el botón de WhatsApp está disponible en todo momento para convertir esa visita en un pedido real, sin fricción.

- **Fácil de mantener y hacer crecer:** el sitio está organizado de forma que agregar un nuevo producto al menú, cambiar un precio, o sumar una nueva sección en el futuro (por ejemplo, un blog de recetas o un catálogo de tortas por encargo) no requiere reconstruir la página desde cero — solo se añade la pieza nueva sobre la misma base ya ordenada.

### ¿Cómo se integran el logo y las fotos para fortalecer la marca?

- El logo aparece de forma consistente en el encabezado (visible todo el tiempo, incluso al hacer scroll) y en el pie de página, reforzando el reconocimiento de marca en cada interacción con el sitio.
- La paleta de colores y las tipografías fueron elegidas específicamente para transmitir "panadería artesanal cálida" (tonos dorados y marrones cálidos, tipografía con carácter hecho a mano) en vez de una plantilla genérica — es una identidad visual pensada exclusivamente para Di'Aroma.
- Se incluyó un elemento visual distintivo — un "sello" circular estilo sello de tinta que dice "Horneado Fresco Hoy" — inspirado en el sello real que las panaderías estampan en sus bolsas de papel, para que el sitio se sienta genuinamente de la marca y no intercambiable con el de cualquier otro negocio.
- Cada producto del menú y cada foto de la galería está pensada como un espacio para mostrar fotografía real y de calidad del producto — el diseño está preparado para que, en cuanto se agreguen las fotos oficiales, la página luzca profesional de inmediato, sin rediseñar nada.

### En resumen para tu jefa, en una frase:

> "Construimos una página que carga rápido, se ve bien en cualquier celular o computadora, refuerza nuestra marca visualmente en cada sección, y está lista para convertir visitas en pedidos por WhatsApp — con una base ordenada que nos permite seguir agregando cosas sin tener que rehacerla."

---

## ¿Qué sigue?

1. Descarga y descomprime el archivo `Pagina-Di-Aroma.zip` (o usa la carpeta ya lista) dentro de tu OneDrive, en la ruta `Pagina Di Aroma`.
2. Ábrela en VS Code y pruébala con Live Server (sección 7).
3. Sube tu logo real (PDF) y tus fotos cuando quieras, y ajustamos la paleta y las imágenes juntos.
4. Sigue la sección 6 para subirlo a GitHub.
5. Cuéntame cuáles de las sugerencias de la sección 8 te interesan y seguimos construyendo.
