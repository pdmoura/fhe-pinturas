import { WaveDivider } from "@/components/ui/dividers";

const services = [
  {
    title: "Cimento Queimado",
    desc: "Superfícies contínuas com estética industrial e sofisticada.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="#0B3C1A" strokeWidth="2.5" />
        <path d="M6 22 Q18 18 30 24 T42 22" stroke="#539D32" strokeWidth="2" fill="none" />
        <path d="M6 30 Q18 26 30 32 T42 30" stroke="#539D32" strokeWidth="2" fill="none" />
        <circle cx="14" cy="16" r="1.5" fill="#0B3C1A" />
        <circle cx="34" cy="34" r="1.5" fill="#0B3C1A" />
      </svg>
    ),
  },
  {
    title: "Marmorato",
    desc: "Efeito mármore veneziano com veios exclusivos e brilho refinado.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="6" y="8" width="36" height="32" rx="4" fill="#F8FAFC" stroke="#0B3C1A" strokeWidth="2.5" />
        <path d="M8 20 Q16 12 24 22 T40 18" stroke="#539D32" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M10 30 Q20 26 28 34 T42 30" stroke="#0B3C1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Pedras Naturais",
    desc: "Aplicação artesanal em fachadas, muros e paredes internas.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path d="M8 34 L14 22 L22 30 L28 18 L36 28 L42 34 Z" fill="#539D32" stroke="#0B3C1A" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M8 40 H42" stroke="#0B3C1A" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Textura",
    desc: "Grafiato, chapiscado e texturas decorativas para todos os estilos.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="18" stroke="#0B3C1A" strokeWidth="2.5" />
        <circle cx="16" cy="18" r="2" fill="#539D32" />
        <circle cx="30" cy="16" r="1.5" fill="#0B3C1A" />
        <circle cx="22" cy="26" r="2.5" fill="#539D32" />
        <circle cx="32" cy="30" r="2" fill="#0B3C1A" />
        <circle cx="18" cy="32" r="1.5" fill="#539D32" />
      </svg>
    ),
  },
  {
    title: "Pintura Residencial",
    desc: "Casas e apartamentos com acabamento impecável em cada ambiente.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path d="M8 22 L24 8 L40 22 V40 H8 Z" stroke="#0B3C1A" strokeWidth="2.5" strokeLinejoin="round" fill="#F8FAFC" />
        <rect x="18" y="28" width="12" height="12" fill="#539D32" />
        <path d="M6 22 L24 6 L42 22" stroke="#539D32" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Pintura Predial",
    desc: "Fachadas e áreas comuns com técnica, segurança e pontualidade.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="10" y="6" width="28" height="36" stroke="#0B3C1A" strokeWidth="2.5" fill="#F8FAFC" />
        <rect x="15" y="12" width="5" height="5" fill="#539D32" />
        <rect x="28" y="12" width="5" height="5" fill="#539D32" />
        <rect x="15" y="22" width="5" height="5" fill="#539D32" />
        <rect x="28" y="22" width="5" height="5" fill="#0B3C1A" />
        <rect x="20" y="32" width="8" height="10" fill="#0B3C1A" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-[#0B3C1A] pt-20 text-white sm:pt-28 flex flex-col lg:min-h-[100dvh]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <svg viewBox="0 0 600 600" className="h-full w-full">
           <circle cx="100" cy="100" r="200" fill="#539D32" />
           <circle cx="500" cy="500" r="240" fill="#539D32" />
        </svg>
      </div>
      <div className="flex-1 flex flex-col justify-center w-full pb-12 sm:pb-16">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="reveal max-w-2xl">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#539D32]">Nossos Serviços</h2>
          <p className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Acabamentos técnicos com identidade artesanal
          </p>
          <p className="mt-4 text-white/70">
            Cada projeto é executado com preparação profissional da superfície, materiais de primeira linha e
            finalização detalhada. Como seu pintor de confiança, garantimos o melhor resultado.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#539D32]/60 hover:bg-white/[0.06] sm:p-6 cursor-pointer"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#539D32]/20 blur-2xl transition group-hover:bg-[#539D32]/40" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg">
                {s.icon}
              </div>
              <h3 className="relative mt-5 text-lg font-bold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
      </div>
      {/* Wave divider: Services → Projects */}
      <WaveDivider fill="#F8FAFC" className="relative z-10 w-full mt-auto" />
    </section>
  );
}
