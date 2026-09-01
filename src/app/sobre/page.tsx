import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DemoNotice } from "@/components/ui/DemoNotice";

export const metadata: Metadata = {
  title: "Sobre a marca",
  description: "Conheça a história, o propósito e os valores da Paula Lourenço Store.",
};

/**
 * Página institucional (briefing seção 35). O briefing pede explicitamente
 * para NÃO inventar a história da marca — todo o conteúdo abaixo é
 * placeholder editável, claramente identificado, até a loja fornecer o
 * material real (texto e foto da fundadora).
 */
export default function SobrePage() {
  return (
    <div className="py-6 md:py-10">
      <Container className="max-w-3xl">
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Sobre a marca" }]} />
        <SectionTitle eyebrow="Institucional" title="Sobre a Paula Lourenço Store" align="left" className="my-6" />

        <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden bg-rose/20">
          <Image
            src="https://picsum.photos/seed/pl-sobre-fundadora/1200/900"
            alt="Espaço reservado para foto da fundadora (imagem de demonstração)"
            fill
            sizes="(min-width: 768px) 700px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-8 text-sm leading-relaxed text-taupe">
          <section>
            <h2 className="mb-2 font-serif text-xl text-ink">Nossa história</h2>
            <p>
              [Placeholder — espaço reservado para a história real da Paula Lourenço Store, a ser escrita pela
              própria marca. Ainda não recebemos esse conteúdo; nada foi inventado aqui.]
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl text-ink">Propósito</h2>
            <p>
              [Placeholder — o que move a marca no dia a dia, em texto fornecido pela Paula Lourenço Store.]
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl text-ink">Valores</h2>
            <p>
              [Placeholder — valores da marca (ex.: elegância, proximidade, atendimento) a confirmar com a
              proprietária antes da publicação.]
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-xl text-ink">Filosofia de atendimento</h2>
            <p>
              [Placeholder — como a loja deseja ser percebida no atendimento via WhatsApp e Instagram.]
            </p>
          </section>
        </div>

        <DemoNotice className="mt-8" />
      </Container>
    </div>
  );
}
