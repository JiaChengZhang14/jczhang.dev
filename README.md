# jczhang.dev

**English** | [Español](#español)

Personal developer portfolio built from scratch — full-stack developer positioning with a focus on AI integration into existing products.

🔗 [https://jczhang-dev.vercel.app/](https://jczhang-dev.vercel.app/) 

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme`)
- **UI Components:** shadcn/ui
- **AI:** Google Gemini API (context-aware chatbot, free tier)
- **Email:** Resend (contact form)
- **i18n:** next-intl (English / Español)
- **Hosting:** Vercel (Hobby plan) — Web Analytics + Speed Insights
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/eyebrows)

## Architecture

This project follows a **data-driven composition pattern**: content lives separately from layout, so adding or reordering sections doesn't require touching component logic.

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx        # fonts, metadata, providers
│   │   ├── page.tsx          # pure composition — imports & orders sections
│   │   └── globals.css       # Tailwind v4 @theme tokens
│   └── api/
│       ├── chat/route.ts     # Gemini-powered chatbot endpoint
│       └── contact/route.ts  # Contact form (Resend)
├── i18n/                     # next-intl routing & request config
├── messages/                 # en.json, es.json translations
├── components/
│   ├── ui/                    # shadcn primitives
│   ├── sections/               # Hero, Experience, Projects, AI & Automation, Skills, Contact
│   ├── SectionWrapper.tsx     # shared padding, max-width, scroll-reveal
│   ├── AmbientNetwork.tsx     # animated canvas network background
│   ├── ChatWidget.tsx         # floating AI chat widget
│   └── LanguageSwitcher.tsx   # floating language toggle
├── data/                      # typed content, keyed by locale: projects.ts, skills.ts, experience.ts, ai-experiments.ts
└── lib/
    ├── types.ts                # shared interfaces
    └── useScrollReveal.ts      # IntersectionObserver hook
```

### Design System

| Token | Hex | Use |
|---|---|---|
| `ink` | `#161B2E` | Base background |
| `surface` | `#1E2438` | Cards, elevated sections |
| `fog` | `#8B93A7` | Secondary text |
| `paper` | `#F5F5F7` | Primary text |
| `signal` | `#4F46E5` | Structural accent (borders, icons, links) |
| `ember` | `#F5A524` | CTA accent (buttons, hover states only) |

### Sections

Hero → Projects → Experience → AI & Automation → Skills → Contact → Footer

## Environment Variables

```bash
GEMINI_API_KEY=                # Google AI Studio
RESEND_API_KEY=                # Resend
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## License

MIT

---

## Español

**[English](#jczhangdev)** | Español

Portfolio personal de desarrollador, construido desde cero — posicionamiento full-stack developer con foco en integración de IA en productos existentes.

🔗 [https://jczhang-dev.vercel.app/](https://jczhang-dev.vercel.app/) 

### Stack Tecnológico

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 (configuración CSS-first vía `@theme`)
- **Componentes UI:** shadcn/ui
- **IA:** Google Gemini API (chatbot con contexto propio, free tier)
- **Email:** Resend (formulario de contacto)
- **i18n:** next-intl (Español / English)
- **Hosting:** Vercel (plan Hobby) — Web Analytics + Speed Insights
- **Tipografías:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/eyebrows)

### Arquitectura

Este proyecto sigue un **patrón de composición data-driven**: el contenido vive separado del layout, así que añadir o reordenar secciones no requiere tocar la lógica de los componentes.

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx        # fuentes, metadata, providers
│   │   ├── page.tsx          # composición pura — importa y ordena secciones
│   │   └── globals.css       # tokens de Tailwind v4 vía @theme
│   └── api/
│       ├── chat/route.ts     # endpoint del chatbot con Gemini
│       └── contact/route.ts  # formulario de contacto (Resend)
├── i18n/                     # configuración de routing/request de next-intl
├── messages/                 # traducciones en.json, es.json
├── components/
│   ├── ui/                    # primitivas de shadcn
│   ├── sections/               # Hero, Experience, Projects, AI & Automation, Skills, Contact
│   ├── SectionWrapper.tsx     # padding, max-width y scroll-reveal compartidos
│   ├── AmbientNetwork.tsx     # fondo animado de red de nodos (canvas)
│   ├── ChatWidget.tsx         # widget de chat IA flotante
│   └── LanguageSwitcher.tsx   # toggle de idioma flotante
├── data/                      # contenido tipado, indexado por idioma: projects.ts, skills.ts, experience.ts, ai-experiments.ts
└── lib/
    ├── types.ts                # interfaces compartidas
    └── useScrollReveal.ts      # hook de IntersectionObserver
```

### Sistema de diseño

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#161B2E` | Fondo base |
| `surface` | `#1E2438` | Cards, secciones elevadas |
| `fog` | `#8B93A7` | Texto secundario |
| `paper` | `#F5F5F7` | Texto principal |
| `signal` | `#4F46E5` | Acento estructural (bordes, íconos, links) |
| `ember` | `#F5A524` | Acento CTA (botones, hover states, solo) |

### Secciones

Hero → Projects → Experience → AI & Automation → Skills → Contact → Footer

### Variables de Entorno

```bash
GEMINI_API_KEY=                # Google AI Studio
RESEND_API_KEY=                # Resend
```

### Cómo empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Licencia

MIT