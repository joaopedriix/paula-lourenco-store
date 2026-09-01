import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/data/site";
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon, InstagramIcon, TruckIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Paula Lourenço Store pelo WhatsApp ou Instagram.",
};

export default function ContatoPage() {
  const whatsappUrl = buildWhatsAppUrl(buildInquiryMessage());

  return (
    <div className="py-6 md:py-10">
      <Container className="max-w-2xl">
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />
        <SectionTitle eyebrow="Fale com a gente" title="Contato" align="left" className="my-6" />

        <div className="flex flex-col gap-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-line-cream p-4 transition-colors hover:border-wine"
          >
            <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
            <div>
              <p className="text-sm font-medium text-ink">WhatsApp</p>
              <p className="text-sm text-taupe">{site.whatsappExibicao}</p>
            </div>
          </a>

          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-line-cream p-4 transition-colors hover:border-wine"
          >
            <InstagramIcon className="h-6 w-6 text-wine" />
            <div>
              <p className="text-sm font-medium text-ink">Instagram</p>
              <p className="text-sm text-taupe">{site.instagramHandle}</p>
            </div>
          </a>

          <div className="flex items-center gap-3 border border-line-cream p-4">
            <TruckIcon className="h-6 w-6 text-wine" />
            <div>
              <p className="text-sm font-medium text-ink">Loja física</p>
              <p className="text-sm text-taupe">
                {site.endereco.linha1}
                <br />
                {site.endereco.linha2}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-[11px] leading-relaxed text-taupe">
          {site.razaoSocial} · CNPJ {site.cnpj}
        </p>
      </Container>
    </div>
  );
}
