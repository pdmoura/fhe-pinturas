import heroUrl from "@/assets/hero-fhe.png";
import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/icons";
import { WaveDivider } from "@/components/ui/dividers";

const marqueeItems = [
  "Cimento Queimado",
  "Marmorato",
  "Pedras Naturais",
  "Texturas Decorativas",
  "Pintura Residencial",
  "Pintura Predial",
  "Grafiato",
  "Fachadas",
  "Atendendo Formosa - GO",
];

function ServicesMarquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className="relative overflow-hidden rounded-full border border-[#539D32]/30 bg-white/70 py-2 backdrop-blur"
      aria-label="Serviços prestados pela FHE Pinturas"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#0B3C1A]">
            <span className="h-2 w-2 rounded-full bg-[#539D32]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#F8FAFC] flex flex-col lg:min-h-[100dvh]">
      <div className="flex-1 flex flex-col justify-center w-full">
        {/* Geometric Grid Pattern */}
        <div className="hero-grid-pattern" aria-hidden="true" />

        {/* Floating organic SVG shapes */}
        <svg className="float-el float-el-1" viewBox="0 0 500 500" fill="none" aria-hidden="true">
          <circle cx="250" cy="250" r="200" stroke="#539D32" strokeWidth="1" />
          <circle cx="250" cy="250" r="150" stroke="#539D32" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="100" stroke="#539D32" strokeWidth="0.5" />
        </svg>
        <svg className="float-el float-el-2" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <path d="M200 40 C300 80 360 180 320 280 C280 360 180 380 100 320 C40 260 20 160 80 80 C120 30 160 20 200 40Z" stroke="#0B3C1A" strokeWidth="1" />
        </svg>
        <svg className="float-el float-el-3" viewBox="0 0 300 300" fill="none" aria-hidden="true">
          <rect x="50" y="50" width="200" height="200" rx="20" stroke="#539D32" strokeWidth="1" transform="rotate(15 150 150)" />
        </svg>

        {/* Animated paint stroke paths */}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="brush1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#539D32" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0B3C1A" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            d="M900,100 C1050,150 1180,300 1120,470 C1060,640 850,720 700,650 C570,590 620,430 720,340 C820,250 800,60 900,100Z"
            fill="url(#brush1)"
            className="animate-float-slow"
          />
          <path d="M-20,80 C200,20 400,120 700,70 C920,20 1100,90 1240,60" stroke="#539D32" strokeWidth="4" fill="none" strokeLinecap="round" strokeOpacity="0.5" className="hero-stroke-path" />
          <path d="M-40,680 C260,620 480,740 820,660 C1000,620 1140,690 1260,640" stroke="#0B3C1A" strokeWidth="4" fill="none" strokeLinecap="round" strokeOpacity="0.5" className="hero-stroke-path hero-stroke-path-2" />
        </svg>

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-4 pb-12 pt-6 sm:gap-10 sm:px-6 sm:pb-16 sm:pt-12 md:grid-cols-[1.1fr_0.9fr] md:pt-20 lg:pb-20">
          <div className="reveal relative z-10 min-w-0">
            <ServicesMarquee />
            <h1 className="mt-5 text-[1.75rem] font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Pintor Profissional em Formosa GO: <span className="text-shimmer">Acabamentos de Alto Padrão</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#0B3C1A]/75 sm:mt-5 sm:text-base lg:text-lg">
              Procurando um <strong>pintor em Formosa</strong>? Transforme seu imóvel residencial ou comercial com o acabamento impecável de{" "}
              <strong>Fanuel Andrade</strong>. Qualidade, pontualidade e excelência em cada detalhe.
            </p>
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-fill inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3C1A] px-6 py-3.5 text-sm font-bold text-white shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5 hover:bg-[#539D32] sm:w-auto sm:text-base"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>Falar no WhatsApp</span>
              </a>
              <a
                href="#servicos"
                className="w-full rounded-xl border-2 border-[#0B3C1A]/15 bg-white/60 px-6 py-3.5 text-center text-sm font-semibold text-[#0B3C1A] backdrop-blur transition hover:border-[#539D32] hover:text-[#539D32] sm:w-auto sm:text-base"
              >
                Ver Serviços
              </a>
            </div>

            <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-[#0B3C1A]/10 pt-6 text-center sm:mt-10">
              <div>
                <dd className="text-xl font-black text-[#0B3C1A] sm:text-2xl">10+</dd>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-[#0B3C1A]/60">Anos de Exp.</dt>
              </div>
              <div>
                <dd className="text-xl font-black text-[#0B3C1A] sm:text-2xl">500+</dd>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-[#0B3C1A]/60">Projetos</dt>
              </div>
              <div>
                <dd className="text-xl font-black text-[#539D32] sm:text-2xl">100%</dd>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-[#0B3C1A]/60">Satisfação</dt>
              </div>
            </dl>
          </div>

          <div className="reveal relative z-10 hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#0B3C1A]/20 to-[#539D32]/20 blur-2xl" />
              <img
                src={heroUrl}
                alt="Logo FHE Pinturas em Geral aplicada em parede com acabamento profissional por Pintor em Formosa GO"
                className="relative w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)] animate-float-slow"
                loading="eager"
              />
              <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute -right-6 -top-6 h-24 w-24 text-[#539D32]">
                <path d="M20,100 Q60,20 100,100 T180,100" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="400" style={{ ["--dash" as string]: 400 }} className="animate-brush-draw" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider: Hero → Services */}
      <WaveDivider fill="#0B3C1A" className="relative z-10 w-full mt-auto" />
    </section>
  );
}
