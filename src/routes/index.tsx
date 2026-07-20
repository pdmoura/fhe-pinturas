import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, lazy, Suspense } from "react";
import logoUrl from "@/assets/logo-fhe.webp";
import logoSmUrl from "@/assets/logo-fhe-sm.webp";
import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/icons";

// Above-the-fold sections (eagerly loaded)
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

// Below-the-fold sections (lazy-loaded to reduce initial JS bundle)
const Projects = lazy(() => import("@/components/sections/Projects").then(m => ({ default: m.Projects })));
const Lightbox = lazy(() => import("@/components/sections/Projects").then(m => ({ default: m.Lightbox })));
const Results = lazy(() => import("@/components/sections/Results").then(m => ({ default: m.Results })));
const Trust = lazy(() => import("@/components/sections/Trust").then(m => ({ default: m.Trust })));
const FAQ = lazy(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));
const ContactCTA = lazy(() => import("@/components/sections/ContactCTA").then(m => ({ default: m.ContactCTA })));
const Footer = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#antes-depois", label: "Resultados" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkBase =
    "relative text-lg font-bold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#539D32] after:transition-all hover:after:w-full cursor-pointer";
  const linkColor = scrolled ? "text-gray-900 hover:text-[#539D32]" : "text-[#0B3C1A] hover:text-[#539D32]";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
          open
            ? `bg-[#0B3C1A] ${scrolled ? "py-2" : "py-3"}`
            : scrolled
              ? "bg-white/90 py-2 shadow-[0_1px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "bg-transparent py-3"
        }`}
        role="banner"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" aria-label="FHE Pinturas - Página Inicial" className="flex items-center">
            <img
              src={logoUrl}
              srcSet={`${logoSmUrl} 180w, ${logoUrl} 350w`}
              sizes="(max-width: 640px) 140px, 168px"
              alt="FHE Pinturas em Geral"
              className={`h-20 w-auto transition-all duration-300 sm:h-24 ${open ? "brightness-0 invert" : ""}`}
            />
          </a>

          <nav className="hidden items-center gap-6 lg:gap-8 lg:flex" aria-label="Navegação principal">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className={`${linkBase} ${linkColor}`}>
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border-2 border-[#0B3C1A] bg-[#0B3C1A] px-5 lg:px-6 py-2.5 text-sm font-semibold text-white transition hover:border-[#539D32] hover:bg-[#539D32] lg:inline-flex cursor-pointer"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Solicitar Orçamento
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu de navegação"}
            aria-expanded={open}
            className="relative z-[1001] flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden cursor-pointer"
          >
            <span className={`block h-[2.5px] w-6 rounded-full transition-all duration-300 ${open ? "translate-y-[7px] rotate-45 bg-white" : "bg-[#0B3C1A]"}`} />
            <span className={`block h-[2.5px] w-6 rounded-full transition-all duration-300 ${open ? "scale-x-0 opacity-0" : "bg-[#0B3C1A]"}`} />
            <span className={`block h-[2.5px] w-6 rounded-full transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45 bg-white" : "bg-[#0B3C1A]"}`} />
          </button>
        </div>
      </header>

      <nav
        aria-label="Navegação mobile"
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-2 bg-[#0B3C1A] px-6 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: "100dvh" }}
      >
        {navLinks.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className={`w-full max-w-xs rounded-lg px-5 py-3 text-center font-display text-2xl font-bold text-white hover:bg-white/10 hover:text-[#539D32] ${
              open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{ 
              transition: `transform 500ms ease ${open ? 100 + i * 50 : 0}ms, opacity 500ms ease ${open ? 100 + i * 50 : 0}ms, background-color 200ms ease, color 200ms ease`
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className={`mt-6 inline-flex items-center gap-2 rounded-full bg-[#539D32] px-10 py-4 text-lg font-bold text-white shadow-xl hover:bg-[#25D366] ${
            open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{ 
            transition: `transform 500ms ease ${open ? 350 : 0}ms, opacity 500ms ease ${open ? 350 : 0}ms, background-color 200ms ease, color 200ms ease`
          }}
        >
          <WhatsAppIcon className="h-5 w-5" />
          Solicitar Orçamento
        </a>
      </nav>
    </>
  );
}

function useDesktopSnapAssist() {
  useEffect(() => {
    let isAnimating = false;
    let accumulatedDelta = 0;
    let cachedSections: Element[] = [];
    let cachedRects: DOMRect[] = [];
    
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return;
      
      const isMouseWheel = Math.abs(e.deltaY) >= 20; 
      if (!isMouseWheel) return;

      if (isAnimating) {
        e.preventDefault();
        return;
      }
      
      const direction = e.deltaY > 0 ? 1 : -1;
      
      if (accumulatedDelta === 0) {
        cachedSections = Array.from(document.querySelectorAll('section, footer'));
        cachedRects = cachedSections.map(sec => sec.getBoundingClientRect());
      }
      
      const sections = cachedSections;
      if (sections.length < 2) return;
        
      let closestSection = sections[0];
      let minDistance = Infinity;
      
      sections.forEach((sec, idx) => {
        const rect = cachedRects[idx];
        const distance = Math.abs(rect.top - 96);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = sec;
        }
      });
      
      const currentIndex = sections.indexOf(closestSection);
      const isContato = currentIndex === sections.length - 2;
      const isFooter = currentIndex === sections.length - 1;
      
      const contatoSection = sections[sections.length - 2];
      const contatoTop = cachedRects[sections.length - 2] ? cachedRects[sections.length - 2].top : 0;
      const isAtTopOfContato = contatoTop >= 80 && contatoTop <= 110;
      
      if (isFooter || (isContato && direction > 0) || (isContato && direction < 0 && !isAtTopOfContato)) {
        return;
      }
      
      e.preventDefault();
      accumulatedDelta += e.deltaY;
      
      if (Math.abs(accumulatedDelta) > 40) {
        accumulatedDelta = 0;
        isAnimating = true;
        
        let nextIndex = currentIndex + direction;
        
        if (nextIndex < 0) nextIndex = 0;
        if (nextIndex >= sections.length) nextIndex = sections.length - 1;
        
        const nextSection = sections[nextIndex];
        if (nextSection && currentIndex !== nextIndex) {
          // Re-calculate the actual target offset just before scrolling to ensure accuracy
          const top = nextSection.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({
            top,
            behavior: 'smooth'
          });
        } else {
          window.scrollBy({ top: direction * 100, behavior: 'smooth' });
        }
        
        // Reset cache
        cachedSections = [];
        cachedRects = [];
        
        setTimeout(() => {
          isAnimating = false;
        }, 700);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);
}

function useScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => el.classList.add("visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const observeElements = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.visible)").forEach((el) => {
        // avoid observing multiple times if already tracked
        if (!el.hasAttribute("data-revealed")) {
          el.setAttribute("data-revealed", "true");
          io.observe(el);
        }
      });
    };

    // Initial observation
    observeElements();

    // Observe future DOM changes (e.g., from React.lazy / Suspense)
    const observer = new MutationObserver(() => observeElements());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      observer.disconnect();
    };
  }, []);
}

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="fixed bottom-6 right-6 z-[9000] flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Voltar ao topo"
        className={`grid h-12 w-12 place-items-center rounded-full border border-[#0B3C1A]/15 bg-white text-[#0B3C1A] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#539D32] hover:text-[#539D32] sm:h-14 sm:w-14 cursor-pointer ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>

      <div className="fab-container">
        <span className="fab-tooltip">Fale conosco!</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco no WhatsApp"
          className="fab-ping grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 sm:h-16 sm:w-16 cursor-pointer"
        >
          <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
        </a>
      </div>
    </div>
  );
}

function Index() {
  useScrollReveal();
  useDesktopSnapAssist();
  const [selectedProject, setSelectedProject] = useState<{src: string, title: string} | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-[#0B3C1A] antialiased">
      <SiteHeader />

      <main id="top" className="pt-20 sm:pt-24">
        <Hero />
        <Services />
        <Suspense>
          <Projects onImageClick={setSelectedProject} />
          <Results />
          <Trust />
          <FAQ />
          <ContactCTA />
        </Suspense>
      </main>

      <Suspense>
        <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
        <Footer />
      </Suspense>
      <FloatingActions />
    </div>
  );
}
