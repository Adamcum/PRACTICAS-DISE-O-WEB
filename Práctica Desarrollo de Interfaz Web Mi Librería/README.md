# 📚 Mi Librería - Proyecto de Maquetación Web

Este repositorio contiene la implementación en código (HTML5 y CSS3) del diseño de interfaz para el sitio web "Mi Librería". El proyecto consiste en la fidelización estricta de un mockup diseñado en Figma, aplicando técnicas de maquetación moderna con Flexbox y CSS Grid.

---

## 📋 Descripción del Proyecto

El objetivo principal ha sido trasladar un diseño visual estático a una web funcional, respetando la paleta de colores, tipografías y jerarquías visuales definidas en el diseño original ("System Design - Adam Correa").

El proyecto consta de tres vistas principales:
1.  **Inicio (Home):** Presentación de marca, productos destacados con navegación horizontal y mapa de ubicación.
2.  **Tienda Online:** Catálogo de productos con filtro lateral, rejilla de 2 columnas y scroll vertical.
3.  **Detalle de Producto:** Ficha técnica específica del libro "Proyecto Karón", replicando un diseño minimalista.

---

## 🛠 Tecnologías Utilizadas

* **HTML5 Semántico:** Uso de etiquetas `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>`.
* **CSS3 Moderno:**
    * **Variables CSS (`:root`):** Para gestión centralizada de colores y tipografía.
    * **Flexbox:** Utilizado en barras de navegación, alineación de elementos internos de tarjetas y el scroll horizontal.
    * **CSS Grid Layout:** Utilizado para la estructura principal de la tienda (Sidebar + Contenido) y la rejilla de productos.
* **Fuentes:** Google Fonts ("Jost").
* **Iconografía:** FontAwesome (para estrellas de valoración) e imágenes SVG/PNG para redes sociales.

---

## 🤖 Uso de Inteligencia Artificial

Este proyecto ha contado con la asistencia de modelos de Inteligencia Artificial (Gemini) actuando en el rol de *AI Pair Programmer*. El uso de la IA se ha enfocado en la optimización del flujo de trabajo y la resolución de problemas técnicos específicos:

* **Generación de Código Base:** Creación rápida de la estructura semántica HTML y las reglas CSS iniciales basadas en los requisitos del diseño.
* **Traducción de Diseño a Código:** Interpretación de capturas de pantalla y mockups de Figma para replicar estilos visuales complejos (sombras, bordes redondeados, paleta de colores exacta).
* **Resolución de Problemas (Debugging):** Asistencia en la corrección de comportamientos de CSS, específicamente en la lógica del *scroll horizontal* (uso de `flex-wrap: nowrap`) y la alineación de elementos en Grid Layout.
* **Generación de Contenido:** Creación de textos simulados (sinopsis, títulos) y documentación (estructura de este README).

**Metodología:** El desarrollo siguió un enfoque iterativo donde el estudiante proporcionaba las instrucciones lógicas y de diseño (prompts), revisaba el código generado por la IA, y solicitaba ajustes precisos para cumplir con la fidelidad visual requerida.

---

## 🎨 Guía de Estilos (Design System)

El proyecto sigue estrictamente la guía de estilos proporcionada:

### Paleta de Colores
| Color | Hex | Uso |
|-------|-----|-----|
| **Neutral Dark** | `#283322` | Cabecera, Footer, Textos oscuros |
| **Neutral Nav** | `#A5BC9B` | Barra de navegación |
| **Neutral Detail**| `#E2E9DE` | Fondos de tarjetas y página de detalle |
| **Primary Bg** | `#CAFCB6` | Fondo general de la página |
| **Purple Main** | `#6F0797` | Fondo de secciones y tarjetas |
| **Purple Dark** | `#38034C` | Botones y cajas de texto oscuro |
| **Purple Light** | `#E8B6FC` | Pastillas de títulos y precios |

### Tipografía
* **Familia:** 'Jost', sans-serif.
* **Tamaños clave:** H1 (72px/48px), Cuerpo (16px).

---

## 🚀 Proceso de Desarrollo: De Figma a Código

El flujo de trabajo para convertir los mockups en código funcional siguió los siguientes pasos:

### 1. Análisis y Configuración Inicial
Se identificaron los patrones de diseño repetitivos. Se creó un archivo `styles.css` centralizado definiendo las **Variables CSS** para asegurar que si se cambia un color en el futuro, se actualice en toda la web.

### 2. Estructura Semántica (HTML)
Se crearon los archivos `index.html` y `tienda.html` estableciendo una estructura común:
* Un **Header** con el logo circular personalizado.
* Un **Nav** con buscador y enlaces.
* Un **Footer** de tres columnas.

### 3. Maquetación con Flexbox y Grid
* **Inicio:** Se usó **Flexbox** para el header y la navegación. Para la sección "Destacados", se implementó un contenedor con `display: flex`, `flex-wrap: nowrap` y `overflow-x: auto`, logrando el efecto de **Scroll Horizontal** solicitado.
* **Tienda:** Se optó por **CSS Grid** (`grid-template-columns: 300px 1fr`) para dividir la pantalla en un Sidebar fijo (que ocupa el 100% de la altura) y una zona de productos.

### 4. Diseño de Componentes (Tarjetas)
Este fue uno de los puntos clave. Se replicó el diseño de tarjeta "Adam Correa":
* Se usó `border-radius` altos (30px) para suavizar bordes.
* Se diseñaron los títulos como "pastillas" (`border-radius: 50px`) flotando sobre la imagen.
* Se ajustó la rejilla de productos de 3 a **2 columnas** para dar mayor protagonismo a las imágenes.

### 5. Página de Detalle y Enrutamiento
Se creó `detalle.html` basado en una captura específica (fondo `#E2E9DE`).
* Se maquetó usando Grid para dividir imagen (izquierda) y texto (derecha).
* Se implementó la lógica de enlace: Se envolvió la tarjeta "Proyecto Karón" en `tienda.html` con una etiqueta `<a>` para permitir la navegación fluida hacia el detalle.

### 6. Ajustes Finales
* Integración del logo circular con borde blanco.
* Alineación de la barra de título en la home con los márgenes laterales (80px).
* Configuración de `min-width: 1400px` para mantener el diseño de escritorio fijo (sin responsive).

---

## 📂 Estructura de Archivos

/mi-libreria │ ├── index.html # Página Principal (Scroll Horizontal + Mapa) ├── tienda.html # Catálogo (Sidebar + Grid 2 columnas) ├── detalle.html # Ficha del producto "Proyecto Karón" ├── styles.css # Hoja de estilos global └── README.md # Documentación del proyecto

## ✒️ Autor
Proyecto realizado siguiendo las especificaciones de diseño de interfaz web.