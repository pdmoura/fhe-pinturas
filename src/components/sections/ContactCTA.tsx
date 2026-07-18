import { useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { WaveDivider } from "@/components/ui/dividers";
import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/icons";

gsap.registerPlugin(MotionPathPlugin);

function PlaneAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mp = containerRef.current?.querySelector<SVGPathElement>(".mp");
      if (!mp) return;

      const length = mp.getTotalLength();
      const drawState = { start: 0, end: 0 };

      function updatePath() {
        const startVal = (drawState.start / 100) * length;
        const endVal = (drawState.end / 100) * length;
        mp!.style.strokeDasharray = `${endVal - startVal} ${length}`;
        mp!.style.strokeDashoffset = `${-startVal}`;
      }

      updatePath();

      const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        containerRef.current!.querySelector(".plane"),
        { scale: 0.6 },
        {
          duration: 4,
          scale: 1.2,
          motionPath: {
            path: mp,
            align: mp,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
        },
        0,
      )
        .to(containerRef.current!.querySelector("#svg-stage"), { duration: 0.7, opacity: 1 }, 0.25)
        .fromTo(drawState, { start: 0, end: 0 }, { duration: 3.8, start: 0, end: 100, onUpdate: updatePath }, 0.28)
        .to(drawState, { duration: 2, start: 94, end: 94, onUpdate: updatePath, ease: "power2" }, "-=2")
        .to(containerRef.current!.querySelector("#svg-stage"), { duration: 0.7, opacity: 0 }, "-=0.9");
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="plane-animation-container" aria-hidden="true">
      <svg id="svg-stage" xmlns="http://www.w3.org/2000/svg" viewBox="-40 -180 1250 1100" opacity="0">
        <path
          className="mp"
          fill="none"
          stroke="url(#planeGrad)"
          strokeWidth="4"
          d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
        />
        <g className="plane">
          <path fill="url(#planeGrad)" opacity="0.3" d="m82.8 35 215.9 94.6L79 92l3.8-57Z" />
          <path fill="url(#planeGrad)" d="m82.8 35 52-23.5 163.9 118.1-216-94.5Z" />
          <path fill="url(#planeGrad)" opacity="0.3" d="m76.8 107.1 214.4 19.6L74.7 131l2.1-23.9Z" />
          <path fill="url(#planeGrad)" d="M298.8 130.4 1.9 103.3l54-45 242.9 72.1Z" />
        </g>
        <defs>
          <linearGradient id="planeGrad" x1="154" x2="160" y1="49" y2="132" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#25D366" />
            <stop offset="1" stopColor="#539D32" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function ContactCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-[#0B3C1A] py-20 text-white sm:py-28 flex flex-col lg:min-h-[100dvh]" aria-labelledby="contact-title">
      <div className="flex-1 flex flex-col justify-center w-full">
        {/* GSAP Plane animation background */}
        <PlaneAnimation />

        {/* Background shapes */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <svg viewBox="0 0 600 600" className="h-full w-full">
            <circle cx="300" cy="300" r="250" stroke="#539D32" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="reveal text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#539D32]/30 bg-[#539D32]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#539D32]">
              <span className="h-2 w-2 rounded-full bg-[#539D32]" />
              Fale Conosco
            </div>
            <h2 id="contact-title" className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Pronto Para Transformar Seu Imóvel?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70 sm:text-lg">
              Entre em contato agora e receba um orçamento personalizado sem compromisso. Atendemos Formosa, Goiás e toda a região.
            </p>

            <a
              href={`${WHATSAPP_URL.replace("pintura.", "pintura.%20Vi%20o%20site%20da%20FHE%20Pinturas%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-fill mt-8 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5 hover:bg-[#539D32]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Chamar no WhatsApp Agora</span>
            </a>

            {/* Contact info pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm backdrop-blur-sm">
                <svg viewBox="0 0 24 24" fill="#539D32" className="h-4 w-4">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="text-white/90">(61) 9 9118-8580</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm backdrop-blur-sm">
                <svg viewBox="0 0 24 24" fill="#539D32" className="h-4 w-4">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-white/90">Formosa — GO e Região</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
