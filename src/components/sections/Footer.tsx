import { InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { WHATSAPP_URL } from "@/lib/constants";
import logoUrl from "@/assets/logo-fhe.png";

export function Footer() {
  return (
    <footer className="relative bg-[#051A0B] pt-16 text-white/80">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 pb-10 sm:px-6 md:grid-cols-4 text-center md:text-left">
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <img src={logoUrl} alt="FHE Pinturas em Geral" className="h-20 w-auto brightness-0 invert sm:h-24" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Pintura profissional e acabamentos premium em Formosa, Goiás e região.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#539D32]">Navegação</h3>
          <ul className="mt-3 space-y-2 text-sm flex flex-col items-center md:items-start">
            <li><a href="#top" className="hover:text-[#539D32] transition">Início</a></li>
            <li><a href="#servicos" className="hover:text-[#539D32] transition">Serviços</a></li>
            <li><a href="#projetos" className="hover:text-[#539D32] transition">Projetos</a></li>
            <li><a href="#antes-depois" className="hover:text-[#539D32] transition">Resultados</a></li>
            <li><a href="#sobre" className="hover:text-[#539D32] transition">Sobre</a></li>
            <li><a href="#faq" className="hover:text-[#539D32] transition">Dúvidas</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#539D32]">Contato</h3>
          <p className="mt-3 font-semibold text-white">Fanuel Andrade</p>
          <a href="tel:+5561991188580" className="mt-1 block text-sm text-white/80 hover:text-[#539D32]">
            (61) 9 9118-8580
          </a>
          <a href="mailto:contato@fhepinturas.com" className="mt-1 block text-sm text-white/80 hover:text-[#539D32]">
            contato@fhepinturas.com
          </a>
          <p className="mt-3 text-sm text-white/60">Atendimento em Formosa, Goiás e região.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#539D32]">Redes</h3>
          <div className="mt-3 flex gap-3 justify-center md:justify-start">
            <a
              href="https://instagram.com/fhepinturas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram FHE Pinturas"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 transition hover:border-[#539D32] hover:bg-[#539D32]/10 cursor-pointer"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp FHE Pinturas"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 transition hover:border-[#25D366] hover:bg-[#25D366]/10 cursor-pointer"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 px-4 text-center text-xs text-white/50 flex flex-col md:flex-row items-center justify-between mx-auto max-w-[1400px]">
        <p>© {new Date().getFullYear()} FHE Pinturas. Todos os direitos reservados. CNPJ: 63.203.758/0001-47</p>
        <p className="mt-2 md:mt-0">Desenvolvido por <a href="https://www.ctrnexus.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline decoration-white/30 hover:decoration-white">CTR NEXUS</a></p>
      </div>
    </footer>
  );
}
