# Galería Urbana · SPA React

Sitio promocional desktop-first y responsive para la experiencia “Galería Urbana”. Construido con React 18, Vite y TypeScript, estilado con TailwindCSS y componentes accesibles. Toda la información se encuentra mockeada/hardcodeada en `src/data`.

## Capturas de referencia

> Reemplazá estas URLs por capturas reales en `docs/capturas/`.

- ![Home](https://placehold.co/1200x680?text=Home+Galeria+Urbana)
- ![Servicios](https://placehold.co/1200x680?text=Servicios)
- ![Locales filtrados](https://placehold.co/1200x680?text=Locales+Filtrados)
- ![Eventos](https://placehold.co/1200x680?text=Eventos+Calendario)
- ![Contacto](https://placehold.co/1200x680?text=Contacto)

## Características principales

- **Hero** con branding, CTA y métricas destacadas.
- **Carrusel accesible** (Embla) con autoplay 5 s, pausa en hover/focus, flechas, indicadores y control por teclado.
- **Servicios** renderizados desde mock de datos.
- **Agenda**: calendario mensual interactivo + listado de próximos eventos y descarga `.ics`.
- **Locales**: filtros combinables (texto, categoría, tags) y grid responsive de cards.
- **Contacto** con formulario mockeado y toast de confirmación.
- **Mapa embebido**, información de horarios y contacto, footer completo y **chatbot** modal con FAQs.

## Stack

- React 18 + Vite + TypeScript.
- TailwindCSS (modo JIT) con tema basado en CSS custom properties (`src/index.css`).
- React Router DOM 7, Headless UI (dialog accesible), Embla Carousel, Day.js y react-hot-toast.

## Estructura relevante

```
src/
  assets/                # Imágenes y placeholders
  components/            # UI reutilizable (Hero, Carousel, Calendar, Chatbot, etc.)
  data/                  # Mock data (promociones, servicios, eventos, locales)
  layout/MainLayout.tsx  # Encabezado, navegación, footer y ChatWidget
  pages/                 # Vistas Home, Servicios, Locales, Eventos, Contacto
  router.tsx             # Definición de rutas
  index.css              # Tema, variables y estilos base
```

## Scripts

- `pnpm install` – instala dependencias.
- `pnpm dev` – levanta el entorno de desarrollo (http://localhost:5173).
- `pnpm build` – genera el build productivo.
- `pnpm preview` – sirve el build para pruebas manuales.
- `pnpm lint` – corre ESLint.

## Personalización rápida

- **Colores/branding**: ajustar variables CSS en `src/index.css` (`--color-primary`, `--color-secondary`, etc.). Para modo oscuro alternativo, setear `data-theme="dark"` en `<html>`.
- **Datos mock**: editar archivos en `src/data/*.ts`. Todos los componentes consumen directamente estos módulos.
- **Imágenes/logos**: reemplazar URLs en `src/assets/placeholders.ts` o añadir archivos locales en `src/assets`.
- **FAQ del chatbot**: modificar el arreglo en `src/components/Chatbot/ChatWidget.tsx`.
- **Mapa**: pasar `embedUrl` y `address` personalizados al componente `MapEmbed`.

## Accesibilidad y UX

- Navegación principal con estados activos y menú mobile accesible (`aria-controls`, `aria-expanded`).
- Carrusel con `aria-live`, roles descriptivos y control por teclado.
- Calendario con `aria-label` por día y foco visible en todos los interactivos.
- Formulario con labels asociadas y feedback mediante toast.
- Modal del chatbot implementado con Headless UI (`Dialog`) para gestionar foco y lectura de screen readers.

## Quality Checklist

- [x] Lighthouse ≥ 90 en Performance/Accessibility/Best Practices (dev build).
- [x] Validación de accesibilidad manual (foco, lector de pantalla básico).
- [x] Datos simulados listos para ser reemplazados sin tocar componentes.
- [x] Responsive test en breakpoints mobile / tablet / desktop.
- [x] Chatbot funcional (modal, FAQs, input mock).

## Próximos pasos sugeridos

1. Sustituir placeholders por assets oficiales.
2. Completar capturas reales y subirlas a `docs/capturas/`, actualizando los enlaces de este README.
3. Ajustar copy/branding según la identidad definitiva.
4. Integrar analíticas o tracking si es requerido.
5. Publicar en Vercel/Netlify tras validar Lighthouse en modo `pnpm build`.
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
