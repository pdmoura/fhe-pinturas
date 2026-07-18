import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WaveDivider } from "@/components/ui/dividers";
import { WHATSAPP_URL } from "@/lib/constants";

import projetoPainelUrl from "@/assets/projeto-painel.webp";
import projetoMarmoratoUrl from "@/assets/projeto-marmorato.webp";
import projetoExtraUrl from "@/assets/projeto-extra.webp";
import tintaDireitaUrl from "@/assets/tinta-direita.webp";

const projects = [
  { src: projetoMarmoratoUrl, title: "Marmorato em sala de estar" },
  { src: projetoPainelUrl, title: "Painel ripado com iluminação" },
  { src: projetoExtraUrl, title: "Acabamento decorativo" },
];

function ProjectsCarousel({ projects, onImageClick }: { projects: {src: string, title: string}[], onImageClick: (p: any) => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative mt-12 w-full max-w-[100vw]">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex -ml-4 touch-pan-y" style={{ backfaceVisibility: "hidden" }}>
          {projects.map((p, i) => (
            <div className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4" key={i}>
              <figure
                className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] transition duration-500 hover:shadow-[var(--shadow-elegant)] aspect-[4/5] sm:aspect-[4/3] cursor-zoom-in"
                onClick={() => onImageClick(p)}
              >
                <img
                  src={p.src}
                  alt={`${p.title} — projeto FHE Pinturas`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B3C1A] via-[#0B3C1A]/90 to-transparent p-5 pt-20 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#539D32] drop-shadow-lg">
                    Projeto Executado
                  </span>
                  <p className="mt-1 font-bold text-xl drop-shadow-lg">{p.title}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center pointer-events-none z-10">
        <button onClick={scrollPrev} aria-label="Projeto anterior" className="pointer-events-auto h-12 w-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-[#0B3C1A] hover:bg-[#539D32] hover:text-white transition cursor-pointer">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center pointer-events-none z-10">
        <button onClick={scrollNext} aria-label="Próximo projeto" className="pointer-events-auto h-12 w-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-[#0B3C1A] hover:bg-[#539D32] hover:text-white transition cursor-pointer">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}

export function Lightbox({ project, onClose }: { project: {src: string, title: string} | null, onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    if (project) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={onClose}>
      <button onClick={onClose} aria-label="Fechar" className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-[#539D32] transition cursor-pointer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="relative max-h-[90vh] max-w-5xl w-full" onClick={e => e.stopPropagation()}>
        <img src={project.src} alt={project.title} className="w-full h-auto max-h-[90vh] object-contain rounded-xl" />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
           <p className="text-white text-xl font-bold">{project.title}</p>
        </div>
      </div>
    </div>
  );
}

export function Projects({ onImageClick }: { onImageClick: (p: any) => void }) {
  return (
    <section id="projetos" className="relative overflow-hidden bg-[#F8FAFC] pt-20 sm:pt-28 flex flex-col lg:min-h-[100dvh]">
      {/* Splash direita */}
      <img src={tintaDireitaUrl} alt="" className="pointer-events-none absolute right-0 top-0 w-48 opacity-80 mix-blend-multiply sm:w-64 md:w-80 lg:w-96" aria-hidden="true" />
      <div className="flex-1 flex flex-col justify-center w-full overflow-hidden pb-12 sm:pb-16 relative z-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 w-full">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#539D32]">Nossos Projetos</h2>
              <p className="mt-3 text-3xl font-black leading-tight text-[#0B3C1A] sm:text-4xl lg:text-5xl">
                Trabalhos que falam por si
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#0B3C1A] underline decoration-[#539D32] decoration-2 underline-offset-4 hover:text-[#539D32] cursor-pointer"
            >
              Quero um assim →
            </a>
          </div>

          <ProjectsCarousel projects={projects} onImageClick={onImageClick} />
        </div>
      </div>
      <WaveDivider fill="#0B3C1A" className="relative z-10 w-full mt-auto" />
    </section>
  );
}
