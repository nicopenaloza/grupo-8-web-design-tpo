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

