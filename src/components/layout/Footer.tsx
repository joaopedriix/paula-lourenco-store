import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { footerNav } from "@/data/nav";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(buildInquiryMessage());

  return (
    <footer className="mt-20 bg-wine text-cream">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <Image
                src="/brand/logo-transparent.png"
                alt="Paula Lourenço Store"
                width={72}
                height={72}
                className="h-10 w-10 object-contain"
              />
              <span className="font-serif text-xl">{site.nome}</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-cream/85">{site.descricaoCurta}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cream underline-offset-4 hover:underline"
            >
              <WhatsAppIcon className="h-4 w-4" /> {site.whatsappExibicao}
            </a>
          </div>

          <FooterColumn title="Institucional" items={footerNav.institucional} />
          <FooterColumn title="Atendimento" items={footerNav.atendimento} />
          <FooterColumn title="Políticas" items={footerNav.politicas} />

          <div>
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/70">
              Redes e loja física
            </h3>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 flex items-center gap-2 text-sm text-cream/90 hover:text-cream"
            >
              <InstagramIcon className="h-4 w-4" /> {site.instagramHandle}
            </a>
            <p className="text-sm leading-relaxed text-cream/85">
              {site.endereco.linha1}
              <br />
              {site.endereco.linha2}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/20 pt-6">
          <p className="text-[11px] leading-relaxed text-cream/60">
            {site.razaoSocial} · CNPJ {site.cnpj}
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-cream/60">
            © {new Date().getFullYear()} {site.nome}. Site de demonstração — produtos, preços e fotos são
            ilustrativos, aguardando material real da loja.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/70">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="text-sm text-cream/90 transition-colors hover:text-cream">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
