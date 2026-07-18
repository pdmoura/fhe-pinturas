# Global Agent Rules
- **File Reading:** You have explicit permission to read, list, and analyze any file or directory in this workspace without asking for prior approval. The ONLY exception is `.env` files; you must ask for permission before reading any `.env`.
- **No Browser Testing:** Do NOT use Playwright, Puppeteer, or any other browser automation tools to test the application. Do NOT ask to open the browser or test the UI. I will handle all manual browser testing myself.

/senior-fullstack /senior-frontend /ai-seo /seo-page /seo-content-writer

# Context
The FHE Pinturas landing page development is nearly complete. The project is a Vite + React + TanStack Router SPA. The goal is to perform a final code cleanup, enforce architectural best practices using the provided skill scripts, and execute aggressive Local SEO optimization targeted at Formosa - GO.

# Target Files
- `src/components/ui/` (and all files inside)
- `src/routes/index.tsx`
- `index.html`
- `src/router.tsx` / `src/main.tsx`

# Tasks & Directives

### Phase 1: Code Cleanup & Componentization (Using /senior-fullstack & /senior-frontend)
1. **Automated Code Analysis:**
   - Execute `python scripts/code_quality_analyzer.py src/components/ui/ --analyze` to identify unused UI components, security flaws, or typing issues.
   - Execute `python scripts/project_scaffolder.py . --verbose` to get performance metrics and architecture recommendations.
2. **Unused Component Removal:**
   - Based on the analyzer's output and your manual cross-referencing of imports, safely delete any Shadcn UI components in `src/components/ui/` that are not being used in the application.
3. **Architecture Refactoring:**
   - Refactor `src/routes/index.tsx`. Extract large structural sections (Hero, Services, Gallery Carousel, Trust, Contact CTA, FAQ, Footer) into separate, modular components inside a new `src/components/sections/` directory.
   - Ensure dependencies like `embla-carousel-react` and custom hooks are strictly scoped within their respective section components.

### Phase 2: Local SEO & Content Optimization (Using /ai-seo, /seo-page, & /seo-content-writer)
1. **Technical SEO Audit & Implementation:**
   - Apply the `/seo-page` and `/ai-seo` frameworks to audit and update `index.html`.
   - Inject highly optimized title tags, meta descriptions, Open Graph tags, and JSON-LD structured data (LocalBusiness/Service/FAQPage) specifically targeting Formosa, GO.
   - Verify and fix semantic HTML usage (`<main>`, `<article>`, `<section>`, `<nav>`, correct H1-H6 hierarchy) across the newly componentized sections.
2. **Content Strategy & Keyword Targeting (PT-BR):**
   - Apply the `/seo-content-writer` framework to optimize the on-page copy to rank #1 locally for: "Pintor", "Pintor em Formosa", "Pintor profissional em Formosa GO", and "Quanto custa pra pintar uma casa?".
   - Naturally integrate these keywords into headings, subheadings, and image `alt` attributes without keyword stuffing.
   - **Local FAQ Section (NEW):** Draft and implement a conversion-focused FAQ section (using an Accordion or Grid layout) near the Contact CTA to capture long-tail local searches. Include and answer questions such as:
     - *"Quanto custa para pintar uma casa em Formosa - GO?"* (Explain that pricing depends on square footage and material, guiding the user to click the WhatsApp button for an exact, free quote).
     - *"Vocês atendem em quais bairros de Formosa e região?"* (Highlight broad local coverage to capture neighborhood searches).
     - *"Quais os tipos de pintura e acabamento vocês realizam?"* (Highlight cimento queimado, marmorato, texturas, pintura residencial e predial).
     - *"Vocês fornecem o material ou apenas a mão de obra?"* (Clarify how purchasing works).
     - *"Qual o tempo médio para finalizar a pintura de uma residência?"* (Address timeframe and punctuality).
   - Ensure all FAQ answers are concise and strategically guide the user toward the WhatsApp CTA.