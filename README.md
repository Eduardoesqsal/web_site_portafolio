# Eduardo Esquivel Salaszar — Portfolio

Portafolio profesional para un perfil Full Stack especializado en sistemas geoespaciales, inteligencia artificial, visión por computadora y automatización.

## Stack

- Next.js (App Router), React y TypeScript estricto
- Tailwind CSS
- Framer Motion con soporte para `prefers-reduced-motion`
- Lucide Icons
- Componentes base con patrón shadcn/ui
- Route Handler para contacto con Resend
- Metadata, Open Graph dinámico, JSON-LD, sitemap, robots y manifest

## Desarrollo local

```bash
corepack pnpm install
cp .env.example .env.local
corepack pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Personalización

Todo el contenido principal está centralizado en `lib/site-data.ts`. Antes de publicar:

1. Cambia nombre, correo, ubicación y enlaces sociales en `siteConfig`.
2. Sustituye los enlaces de demo y GitHub de cada proyecto.
3. Ajusta la experiencia con fechas y empresas reales.
4. Revisa el CV generado en `lib/create-cv-pdf.ts`.
5. Define `NEXT_PUBLIC_SITE_URL` con el dominio final.
6. Coloca tu fotografía en `public/eduardo-esquivel.jpg`.

## Formulario de contacto

El endpoint `POST /api/contact` valida campos, usa un honeypot y limita intentos básicos. En desarrollo valida sin enviar; en producción requiere:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=hola@tudominio.com
CONTACT_FROM_EMAIL=Portfolio <portfolio@tudominio.com>
```

El dominio del remitente debe estar verificado en Resend.

## Validación

```bash
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm build
```

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. Importa el proyecto desde Vercel.
3. Añade las cuatro variables del archivo `.env.example`.
4. Despliega y configura el dominio.
5. Comprueba `/sitemap.xml`, `/robots.txt`, `/opengraph-image` y un envío real del formulario.

La configuración no requiere cambios especiales: Vercel detecta Next.js y ejecuta el build automáticamente.
