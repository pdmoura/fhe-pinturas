import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WaveDivider } from "@/components/ui/dividers";

const faqs = [
  {
    question: "Quanto custa para pintar uma casa em Formosa - GO?",
    answer: "O valor depende de fatores como a metragem do imóvel, o estado atual das paredes e o tipo de acabamento desejado (pintura lisa, textura, cimento queimado, etc). Para garantir o melhor custo-benefício, clique no botão do WhatsApp e solicite um orçamento gratuito e sem compromisso. Avaliamos seu espaço e passamos o preço exato.",
  },
  {
    question: "Vocês atendem em quais bairros de Formosa e região?",
    answer: "Atendemos em todos os bairros de Formosa, Goiás (Centro, Formosinha, Parque Lago, Setor Sul, entre outros) e também em chácaras, condomínios fechados e cidades vizinhas na região do Entorno. Onde houver necessidade de um pintor profissional, a FHE Pinturas estará lá.",
  },
  {
    question: "Quais os tipos de pintura e acabamento vocês realizam?",
    answer: "Somos especialistas tanto em pintura residencial (casas, apartamentos, muros) quanto predial/comercial. Realizamos acabamentos de alto padrão como Cimento Queimado, Marmorato (efeito mármore veneziano), texturas, grafiato e aplicação de pedras naturais em fachadas.",
  },
  {
    question: "Vocês fornecem o material ou apenas a mão de obra?",
    answer: "Fica a critério do cliente. Podemos fornecer o pacote completo (mão de obra + materiais de primeira linha) para sua total comodidade, ou apenas a mão de obra caso você prefira comprar as tintas e insumos. Em ambos os casos, prestamos toda a consultoria necessária na escolha dos produtos.",
  },
  {
    question: "Qual o tempo médio para finalizar a pintura de uma residência?",
    answer: "O prazo varia conforme o tamanho do projeto, mas nosso diferencial é a pontualidade. Trabalhamos com cronograma organizado para entregar a obra no prazo estipulado, sem atrasos, mantendo sempre a limpeza e a organização do ambiente durante a execução.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-[#F8FAFC] pt-20 sm:pt-24 flex flex-col lg:min-h-[100dvh]">
      <div className="absolute top-0 inset-x-0 mx-auto max-w-[1400px] h-px bg-gradient-to-r from-transparent via-[#539D32]/30 to-transparent" />
      <div className="flex-1 flex flex-col justify-center w-full relative z-10 px-4 sm:px-6">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal mx-auto max-w-3xl text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#539D32]">Dúvidas Frequentes</h2>
            <p className="mt-3 text-3xl font-black leading-tight text-[#0B3C1A] sm:text-4xl lg:text-5xl">
              Perguntas sobre nossos serviços
            </p>
          </div>
          <div className="reveal mx-auto mt-12 max-w-3xl rounded-2xl bg-white p-6 shadow-[var(--shadow-soft)] sm:p-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-[#0B3C1A]/10 py-2">
                  <AccordionTrigger className="text-left text-lg font-bold text-[#0B3C1A] hover:text-[#539D32] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-[#0B3C1A]/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <WaveDivider fill="#0B3C1A" className="relative z-10 w-full mt-auto" />
    </section>
  );
}
