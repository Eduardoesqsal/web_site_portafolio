# AGENTS.md

Contexto operativo del proyecto `eduardo-esquivel-portfolio`.

Este documento sirve para que cualquier agente o colaborador entienda rápidamente cómo está construido el sitio, dónde vive cada responsabilidad y qué partes son sensibles al cambio.

## Resumen del proyecto

Portfolio personal construido con Next.js App Router, React 19 y TypeScript estricto. El sitio está orientado a presentar un perfil profesional de desarrollo full stack con foco en:

- sistemas geoespaciales;
- inteligencia artificial aplicada;
- visión por computadora;
- automatización y agentes;
- captación de contacto y descarga de CV.

La experiencia principal es una landing de una sola página con secciones secuenciales, navegación anclada, animaciones con Framer Motion y un formulario de contacto que envía correos vía Resend en producción.

## Stack real

- Next.js `15.4.x` con App Router
- React `19.1.x`
- TypeScript `5.9.x`
- Tailwind CSS `4.1.x`
- Framer Motion
- Lucide React
- `clsx` + `tailwind-merge` para utilidades de clases
- Route Handlers nativos de Next.js

## Scripts disponibles

Definidos en `package.json`:

- `pnpm dev` — desarrollo con Turbopack
- `pnpm build` — build de producción
- `pnpm start` — ejecutar producción
- `pnpm lint` — ESLint con warnings en cero
- `pnpm typecheck` — verificación TypeScript sin emitir

## Estructura de alto nivel

### Entrada de la app

- `app/layout.tsx`
  - configura metadata global, viewport y JSON-LD;
  - monta `Header`, `children` y `Footer`;
  - incluye enlace de “saltar al contenido”.

- `app/page.tsx`
  - renderiza la landing principal;
  - orden de secciones:
    - `Hero`
    - `About`
    - `Stack`
    - `Projects`
    - `Experience`
    - `Services`
    - `Contact`

### Datos y tipos

- `lib/site-data.ts`
  - fuente central de contenido editorial;
  - contiene:
    - `siteConfig`
    - navegación
    - stats
    - categorías de stack
    - proyectos
    - experiencia
    - servicios
    - specialty cards
    - capability icons
  - este archivo alimenta casi toda la UI; cambiarlo suele afectar múltiples secciones.

- `types/index.ts`
  - contratos de datos:
    - `NavItem`
    - `Technology`
    - `TechCategory`
    - `ProjectVisual`
    - `Project`
    - `Experience`
    - `Service`

### Utilidades

- `lib/utils.ts`
  - expone `cn(...)` para combinar clases con `clsx` y `tailwind-merge`.

- `hooks/use-active-section.ts`
  - usa `IntersectionObserver` para marcar la sección visible en el header.

### UI base

- `components/ui/*`
  - primitivas de estilo base para:
    - `Button`
    - `Input`
    - `Textarea`
    - `Card`
    - `Badge`
  - siguen un patrón tipo `shadcn/ui`.

### Layout y navegación

- `components/layout/header.tsx`
  - componente cliente;
  - navegación fija con estado scroll;
  - menú móvil;
  - usa `useActiveSection`.

- `components/layout/footer.tsx`
  - enlaces sociales y navegación secundaria;
  - CTA de correo y retorno al inicio.

### Secciones del sitio

- `components/sections/hero.tsx`
  - hero principal;
  - modal de perfil;
  - descarga de CV;
  - foto de perfil con fallback si la imagen no carga.

- `components/sections/about.tsx`
  - presentación del enfoque y principios;
  - cards de especialidades.

- `components/sections/stack.tsx`
  - categorías tecnológicas;
  - carrusel visual tipo marquee al pie.

- `components/sections/projects.tsx`
  - grid de casos/proyectos;
  - visual mockup por proyecto;
  - CTA hacia contacto.

- `components/sections/experience.tsx`
  - timeline de experiencia;
  - panel lateral con contexto de aprendizaje continuo.

- `components/sections/services.tsx`
  - selector tipo tabs/roles;
  - panel de servicio activo;
  - fases de trabajo.

- `components/sections/contact.tsx`
  - bloque de contacto;
  - integra `ContactForm`.

### Animación y visuales

- `components/motion/reveal.tsx`
  - wrapper de entrada al viewport;
  - respeta `prefers-reduced-motion`.

- `components/project-visual.tsx`
  - mockups visuales para cada tipo de proyecto:
    - map
    - face
    - cad
    - commerce
    - agro
    - data

### Formularios y API

- `components/contact-form.tsx`
  - componente cliente;
  - envía `POST /api/contact`;
  - incluye:
    - validación de campos en UI;
    - honeypot (`companyWebsite`);
    - estados de loading/success/error.

- `app/api/contact/route.ts`
  - valida payload;
  - limita requests por IP en memoria;
  - en desarrollo solo valida y registra en consola si faltan variables;
  - en producción envía correo a Resend.

- `app/api/cv/route.ts`
  - devuelve un PDF generado dinámicamente desde `lib/create-cv-pdf.ts`.

## Rutas auxiliares y metadata

- `app/sitemap.ts`
  - sitemap con la URL base.

- `app/robots.ts`
  - permite rastreo del sitio;
  - bloquea `/api/`.

- `app/manifest.ts`
  - manifiesto PWA básico.

- `app/opengraph-image.tsx`
  - genera la imagen OG con `ImageResponse`.

- `app/not-found.tsx`
  - página 404 simple con enlace de retorno.

## Diseño y estilos

- `app/globals.css`
  - define tokens de color y tipografía;
  - clases utilitarias compartidas:
    - `container-site`
    - `section-space`
    - `hero-grid`
    - `blueprint-grid`
    - `noise`
    - `social-icon`
    - `modal-social`
    - `focus-ring`
  - incluye soporte para `prefers-reduced-motion`.

El sitio usa una identidad visual muy marcada:

- fondo oscuro y claro alternado;
- verde lima como acento principal;
- estética editorial / técnica;
- animaciones suaves con mucho uso de gradientes, bordes y blur;
- estructura pensada para scroll vertical.

## Comportamiento importante

### Header

El header es fijo y cambia estilo cuando el usuario hace scroll. También resalta la sección visible usando `IntersectionObserver`. Si cambias IDs de secciones, debes actualizar:

- los `href` de `navigation` en `lib/site-data.ts`;
- los `id` de cada sección;
- la lista de `sectionIds` que consume `useActiveSection`.

### Hero

El hero depende de `siteConfig.profilePhoto`. En el estado actual del repositorio no existe carpeta `public/`, así que la imagen referenciada no está incluida. Si no se agrega, el componente cae al fallback visual con las iniciales.

### Contacto

El flujo del formulario es:

1. usuario llena el form;
2. el cliente hace `fetch("/api/contact")`;
3. el endpoint valida contenido, honeypot y límite básico por IP;
4. si faltan variables de Resend:
   - en desarrollo solo valida y responde sin enviar;
   - en producción devuelve `503`.

Variables necesarias:

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

### CV

El PDF no depende de una librería pesada de PDF: se genera a mano en `lib/create-cv-pdf.ts`. Eso significa que:

- los cambios de texto se hacen ahí;
- el diseño es muy sensible a coordenadas y longitudes;
- conviene verificar el archivo descargado después de modificarlo.

## Dependencias y enfoque arquitectónico

El proyecto está montado como una landing modular, no como una app con estado compartido complejo. La mayor parte de la lógica vive en:

- datos estáticos centralizados;
- componentes de sección;
- pequeñas interacciones de cliente;
- endpoints muy acotados.

Eso hace que los cambios correctos sean normalmente:

- editar `lib/site-data.ts` para contenido;
- editar un componente de sección para presentación;
- editar una ruta API para flujo de contacto o CV.

## Convenciones importantes al editar

- Mantener la fuente de verdad de contenido en `lib/site-data.ts`.
- Evitar duplicar texto editorial en componentes.
- Respetar `prefers-reduced-motion` cuando se agreguen animaciones nuevas.
- Si cambias navegación o secciones, revisar:
  - `navigation`;
  - `id` de secciones;
  - `useActiveSection`;
  - enlaces del header y footer.
- Si modificas contacto, revisar:
  - validación de frontend;
  - validación de backend;
  - honeypot;
  - límite de rate básico;
  - variables de entorno.
- Si agregas assets reales, colocarlos en `public/` y referenciarlos desde `site-data`.

## Validación recomendada antes de entregar cambios

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`

## Estado actual observado

- El repositorio está enfocado a un único sitio de portfolio.
- Existe carpeta `public/` con imágenes de proyectos: `autocad.jpeg`, `biometric.jpeg`, `geofield.jpeg`, `tenis.jpeg`.
- El contenido general ya está bastante centralizado; el principal punto de verdad es `lib/site-data.ts`.

## Qué revisar primero si algo falla

1. `lib/site-data.ts`
2. `app/layout.tsx`
3. `app/page.tsx`
4. `components/layout/header.tsx`
5. `components/contact-form.tsx`
6. `app/api/contact/route.ts`
7. `lib/create-cv-pdf.ts`

## Propósito de este archivo

Este `agents.md` existe para acelerar mantenimiento, cambios de contenido y tareas de evolución del sitio sin tener que releer toda la base de código cada vez.
#biometria
https://face-biometric-a-i-1.onrender.com/

#zapatos
 https://white-kicks.netlify.app

#repo (configuración de GitHub)

- Repositorio remoto (principal): `https://github.com/Eduardoesqsal/web_site_portafolio.git`
- Remote `origin` histórico: `https://github.com/Eduardoesqsal/WEB_SITE.git` (duplicado del proyecto)
- Rama principal: `main`
- Gestor de paquetes: `pnpm` (versión fijada en `package.json`, `packageManager: pnpm@10.14.0`)
- Node requerido en CI: `22`
- Pipeline: `.github/workflows/ci.yml`

## Pipeline CI/CD

Hay un único pipeline de CI en `.github/workflows/ci.yml`; se ejecuta en cada `push` y `pull_request` hacia `main`. No hay despliegue automático (CD).

El pipeline corre sobre `ubuntu-latest` con Node 22 y pnpm 10.14.0 y ejecuta en orden:

1. `pnpm lint` (ESLint con `--max-warnings=0`)
2. `pnpm typecheck` (`tsc --noEmit`)
3. `pnpm build` (`next build`)

Para que una PR entre a `main`, la validación debe pasar completa.

Concurrencia: si llega un push nuevo mientras hay un job corriendo, cancela el anterior (`cancel-in-progress: true`) para no saturar el runner.

## Estado del repositorio en GitHub

- Repositorio ya inicializado en GitHub con la rama `main`.
- Si se clona en otro equipo: `git clone https://github.com/Eduardoesqsal/web_site_portafolio.git`.
- Los cambios se suben con `git commit` + `git push origin main`.

## VERCEL
# CORREGIR ERROR DE BUILD EN VERCEL — NEXT.JS

Actúa como **Senior Next.js / TypeScript / Vercel Developer**.

El proyecto falla durante `pnpm run build` en Vercel con este error:

```text
Error: Failed to collect configuration for /_not-found

TypeError: Invalid URL
    at ...
code: 'ERR_INVALID_URL'
input: ''

Failed to collect page data for /_not-found

Build error occurred
Command "pnpm run build" exited with 1
```

También aparece este warning:

```text
Ignored build scripts: sharp, unrs-resolver.
Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.
```

## OBJETIVO

Encontrar la **causa real** del `TypeError: Invalid URL` y corregirla para que:

```bash
pnpm run build
```

termine correctamente y Vercel pueda desplegar el proyecto.

## REGLAS IMPORTANTES

1. **NO asumas que el problema es `sharp`.**
2. El warning de `sharp` / `unrs-resolver` no debe tratarse como la causa principal a menos que la investigación demuestre lo contrario.
3. Investiga primero el error:

```text
TypeError: Invalid URL
input: ''
```

4. Busca específicamente usos como:

```ts
new URL(process.env.X)
```

```ts
new URL(process.env.NEXT_PUBLIC_X)
```

```ts
new URL("")
```

y cualquier configuración que construya URLs a partir de variables de entorno.

5. Revisa todo el proyecto buscando variables de entorno relacionadas con URLs, por ejemplo:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_API_URL
NEXT_PUBLIC_SUPABASE_URL
SUPABASE_URL
NEXTAUTH_URL
```

No te limites a estos nombres; identifica cualquier variable usada como URL.

6. Revisa especialmente:

```text
app/layout.tsx
app/not-found.tsx
app/page.tsx
src/
next.config.*
middleware.*
lib/
utils/
config/
```

y cualquier archivo importado por estos.

7. El hecho de que el error mencione:

```text
/_not-found
```

NO significa automáticamente que `not-found.tsx` sea el archivo culpable. Rastrea los imports y la configuración que Next.js ejecuta durante el build.

8. Comprueba si alguna variable de entorno puede llegar como:

```text
undefined
""
```

o una cadena inválida.

9. Si una variable debe ser una URL, valida correctamente su existencia y formato.

Por ejemplo, evita código que provoque:

```ts
new URL(process.env.SOME_URL || "")
```

si esa URL es obligatoria.

10. Si la variable es obligatoria para producción, implementa una solución correcta y explícita, por ejemplo una validación clara que indique qué variable falta.

11. Si la variable realmente es opcional, modifica el código para que el build funcione correctamente cuando no esté definida.

12. **NO hardcodees URLs de producción inventadas.**

13. **NO cambies la arquitectura del proyecto.**

14. **NO elimines funcionalidades para ocultar el error.**

15. **NO desactives temporalmente el chequeo de errores.**

16. Mantén el proyecto compatible con Vercel.

## INVESTIGACIÓN

Primero ejecuta:

```bash
pnpm run build
```

Luego busca en todo el proyecto:

```bash
rg "new URL" .
```

y:

```bash
rg "process\.env" .
```

También revisa:

```bash
rg "NEXT_PUBLIC|SUPABASE_URL|API_URL|SITE_URL|NEXTAUTH_URL" .
```

Identifica exactamente qué código puede estar generando:

```text
new URL("")
```

o una URL inválida durante el build.

## CORRECCIÓN

Una vez encontrada la causa:

1. Corrige el código.
2. No modifiques archivos que no sean necesarios.
3. Mantén TypeScript correctamente tipado.
4. Mantén compatibilidad con producción/Vercel.
5. Ejecuta nuevamente:

```bash
pnpm run build
```

6. Si falla nuevamente, continúa investigando hasta encontrar la causa real.

## VALIDACIÓN FINAL

No declares el problema solucionado solamente porque cambiaste el código.

Debes comprobar que:

```bash
pnpm run build
```

finaliza con:

```text
✓ Build completed
```

o equivalente y:

```text
exit code 0
```

## RESULTADO QUE QUIERO

Al terminar dime:

### 1. CAUSA

Qué archivo y qué código estaba provocando:

```text
TypeError: Invalid URL
input: ''
```

### 2. SOLUCIÓN

Qué modificaste exactamente.

### 3. VARIABLES DE ENTORNO

Indica si falta alguna variable que deba configurarse en Vercel.

### 4. VALIDACIÓN

Indica el resultado final de:

```bash
pnpm run build
```

### 5. CAMBIOS

Dame una lista breve de los archivos modificados.

**No me des una solución teórica. Investiga el código real del proyecto, corrígelo y verifica el build antes de decir que está solucionado.**
