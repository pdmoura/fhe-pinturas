import { useState, useRef } from "react";
import { WaveDivider } from "@/components/ui/dividers";
import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/icons";

import antesUrl from "@/assets/antes.png";
import depoisUrl from "@/assets/depois.png";

function BeforeAfterSection() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => { draggingRef.current = false; };

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#539D32]">Antes & Depois</h2>
        <p className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
          Veja a transformação em tempo real
        </p>
        <p className="mt-4 text-white/70">
          Deslize a barra e descubra o poder de uma pintura profissional. Seu ambiente pode mudar assim — hoje.
        </p>
      </div>

      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative mx-auto mt-10 aspect-[16/10] md:aspect-[21/9] w-full max-w-5xl xl:max-w-6xl select-none overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] touch-none"
      >
        {/* Depois (base) */}
        <img src={depoisUrl} alt="Ambiente depois da pintura profissional FHE Pinturas" className="pointer-events-none absolute inset-0 h-full w-full object-cover" draggable={false} />
        {/* Antes (clipped) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={antesUrl} alt="Ambiente antes da pintura, com paredes desgastadas" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Antes</span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#0B3C1A] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Depois</span>

        {/* Divider + handle */}
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="pointer-events-auto absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-xl ring-2 ring-[#0B3C1A] cursor-ew-resize">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#0B3C1A]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l-6 6 6 6" />
              <path d="M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>

        {/* Accessible range fallback */}
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Deslizar para comparar antes e depois" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>

      <div className="mt-10 text-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-fill inline-flex items-center gap-2 rounded-xl bg-[#539D32] px-8 py-4 text-base font-bold text-white shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5 hover:bg-[#25D366]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span>Quero transformar meu ambiente</span>
        </a>
      </div>
    </div>
  );
}

export function Results() {
  return (
    <section id="antes-depois" className="relative overflow-hidden bg-[#0B3C1A] pt-20 text-white sm:pt-24 flex flex-col lg:min-h-[100dvh]">
      <div className="flex-1 flex flex-col justify-center w-full">
        <BeforeAfterSection />
      </div>
      <WaveDivider fill="#F8FAFC" className="relative z-10 mt-8 sm:mt-12 w-full mt-auto" />
    </section>
  );
}
