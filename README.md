# José Pássera — Sitio personal

Sitio personal de una sola página, con una interfaz simple, moderna y oscura. Presenta una breve introducción, información personal, áreas de interés y un enlace de contacto.

## Características

- Diseño oscuro y adaptable a escritorio y dispositivos móviles.
- Navegación interna entre presentación, perfil, áreas de interés y contacto.
- Tipografías Geist y Geist Mono.
- Animaciones sutiles con soporte para `prefers-reduced-motion`.
- Metadatos básicos para buscadores y enlaces compartidos.
- Salida compatible con Cloudflare Workers mediante Vinext.

## Tecnologías

- React 19
- TypeScript
- Vinext y Vite
- Tailwind CSS 4
- Cloudflare Workers

## Requisitos

- Node.js 22.13 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

La aplicación estará disponible normalmente en [http://localhost:3000](http://localhost:3000).

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor local con recarga automática. |
| `npm run build` | Genera la versión de producción. |
| `npm run start` | Ejecuta localmente la versión generada. |
| `npm run lint` | Analiza el código con ESLint. |
| `npm test` | Genera la aplicación y ejecuta las pruebas automatizadas. |
| `npm run db:generate` | Genera migraciones de Drizzle cuando se utiliza la base de datos. |

## Estructura principal

```text
app/
  page.tsx          Contenido y estructura de la página
  globals.css       Estilos globales y diseño adaptable
  layout.tsx        Layout raíz, tipografías y metadatos
public/             Recursos estáticos
worker/             Entrada del Cloudflare Worker
tests/              Pruebas automatizadas
.openai/             Configuración de alojamiento
```

## Personalización

- Modifica textos, enlaces y áreas de interés en `app/page.tsx`.
- Ajusta colores, espaciado y puntos de quiebre en `app/globals.css`.
- Actualiza el título, la descripción y los iconos en `app/layout.tsx`.
- Reemplaza `public/favicon.svg` para cambiar el icono del sitio.

## Verificación antes de publicar

```bash
npm run lint
npm run build
```

No se requieren variables de entorno para la versión actual.
