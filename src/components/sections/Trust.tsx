import { WaveDivider } from "@/components/ui/dividers";
import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/icons";
import tintaEsquerdaUrl from "@/assets/tinta-esquerda.webp";
import tintaEsquerdaSmUrl from "@/assets/tinta-esquerda-sm.webp";

const trustFeatures = [
  {
    title: "Garantia em Todos os Serviços",
    desc: "Cada projeto é executado com materiais de primeira linha e garantia de satisfação total.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#539D32" className="h-7 w-7">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: "Pontualidade Rigorosa",
    desc: "Cumprimos todos os prazos acordados. Seu tempo é tão valioso quanto o nosso trabalho.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#539D32" className="h-7 w-7">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
  },
  {
    title: "Equipe Especializada",
    desc: "Profissionais treinados e experientes para cada tipo de acabamento e aplicação.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#539D32" className="h-7 w-7">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Acabamento Impecável",
    desc: "Atenção obsessiva aos detalhes que transforma ambientes comuns em espaços extraordinários.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#539D32" className="h-7 w-7">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
];

export function Trust() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#F8FAFC] pt-20 sm:pt-28 flex flex-col lg:min-h-[100dvh]" aria-labelledby="trust-title">
      {/* Splash esquerda */}
      <img src={tintaEsquerdaUrl} srcSet={`${tintaEsquerdaSmUrl} 200w, ${tintaEsquerdaUrl} 612w`} sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 320px" alt="" className="pointer-events-none absolute left-0 -top-4 w-40 opacity-80 mix-blend-multiply sm:-top-2 sm:w-48 md:-top-4 md:w-56 lg:w-72 xl:w-80" aria-hidden="true" loading="lazy" />
      
      {/* Multi-wave divider at top (from gallery → trust in index.html) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg viewBox="0 0 600 600" className="h-full w-full">
          <circle cx="500" cy="100" r="250" fill="#0B3C1A" />
          <circle cx="80" cy="500" r="200" fill="#539D32" />
        </svg>
      </div>
      <div className="flex-1 flex flex-col justify-center w-full pb-8 sm:pb-12 relative z-10">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 w-full">
          <div className="reveal text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#539D32]/30 bg-[#539D32]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#539D32]">
              <span className="h-2 w-2 rounded-full bg-[#539D32]" />
              Por Que Nos Escolher
            </div>
            <h2 id="trust-title" className="mt-5 text-3xl font-black leading-tight text-[#0B3C1A] sm:text-4xl lg:text-5xl">
              Compromisso com a Excelência
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#0B3C1A]/70 sm:text-lg">
              Mais do que pintura, entregamos confiança, qualidade e resultados que superam expectativas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {trustFeatures.map((f, i) => (
              <div
                key={f.title}
                className={`reveal flex items-start gap-5 rounded-2xl border border-[#0B3C1A]/8 bg-white p-6 shadow-[var(--shadow-soft)] transition duration-300`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0B3C1A]/5 transition">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B3C1A]">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#0B3C1A]/65">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 text-center">
            <a
              href={`${WHATSAPP_URL.replace("pintura.", "pintura.%20Vi%20o%20site%20da%20FHE%20Pinturas%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-fill inline-flex items-center gap-2 rounded-xl bg-[#0B3C1A] px-8 py-4 text-base font-bold text-white shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5 hover:bg-[#539D32]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Solicitar Orçamento Grátis</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
