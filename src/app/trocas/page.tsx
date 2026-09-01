import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Política de trocas",
  description: "Informações sobre trocas, devoluções e prazos da Paula Lourenço Store.",
};

/**
 * Estrutura de política de trocas (briefing seção 36). O briefing proíbe
 * inventar regras jurídicas — os prazos e condições abaixo são campos
 * PLACEHOLDER, claramente identificados, até a loja fornecer a política
 * oficial.
 */
export default function TrocasPage() {
  const whatsappUrl = buildWhatsAppUrl(buildInquiryMessage());

  return (
    <div className="py-6 md:py-10">
      <Container className="max-w-3xl">
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Trocas e devoluções" }]} />
        <SectionTitle eyebrow="Atendimento" title="Política de trocas e devoluções" align="left" className="my-6" />

        <div className="flex flex-col gap-8 text-sm leading-relaxed text-taupe">
          <section id="prazo">
            <h2 className="mb-2 font-serif text-xl text-ink">Prazo para troca</h2>
            <p>
              [Placeholder — prazo oficial de troca (em dias corridos, a partir do recebimento) a ser
              confirmado pela Paula Lourenço Store. Nenhum prazo foi inventado.]
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl text-ink">Como solicitar</h2>
            <p>
              [Placeholder — passo a passo de como a cliente deve solicitar a troca/devolução, provavelmente
              via WhatsApp da loja, a confirmar com a proprietária.]
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl text-ink">Produtos com defeito</h2>
            <p>
              [Placeholder — condições específicas para peças com defeito de fabricação, a confirmar.]
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl text-ink">Condições da peça</h2>
            <p>
              [Placeholder — condições de higiene/etiqueta para aceite da troca, a confirmar.]
            </p>
          </section>

          <section id="guia-de-medidas">
            <h2 className="mb-2 font-serif text-xl text-ink">Guia de medidas</h2>
            <p>
              Confira a tabela de medidas de cada peça diretamente na página do produto, na aba &ldquo;Medidas&rdquo;,
              antes de finalizar sua compra — isso ajuda a reduzir a necessidade de troca por tamanho.
            </p>
          </section>

          <section id="privacidade">
            <h2 className="mb-2 font-serif text-xl text-ink">Privacidade</h2>
            <p>
              [Placeholder — política de privacidade oficial a ser fornecida pela loja. Este site salva apenas
              carrinho e favoritos no localStorage do seu próprio navegador; nenhum dado é enviado a servidores
              além do necessário para abrir a conversa de WhatsApp que você mesma inicia.]
            </p>
          </section>

          <section id="termos">
            <h2 className="mb-2 font-serif text-xl text-ink">Termos de uso</h2>
            <p>[Placeholder — termos de uso oficiais a serem fornecidos pela loja.]</p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl text-ink">Contato</h2>
            <p>
              Para dúvidas sobre troca ou devolução, fale diretamente com a loja pelo WhatsApp:{" "}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-wine underline-offset-4 hover:underline">
                iniciar conversa
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
