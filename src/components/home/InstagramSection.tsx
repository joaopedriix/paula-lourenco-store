import Image from "next/image";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { InstagramIcon } from "@/components/ui/icons";
import { DemoNotice } from "@/components/ui/DemoNotice";

const POSTS = Array.from({ length: 6 }, (_, i) => ({
  seed: `pl-instagram-${i + 1}`,
}));

/** Seção Instagram (briefing seção 17) — grid de posts de demonstração. */
export function InstagramSection() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow={site.instagramHandle}
          title={`Siga ${site.instagramHandle}`}
          className="mb-8 md:mb-10"
        />
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6">
          {POSTS.map((post) => (
            <div key={post.seed} className="relative aspect-square overflow-hidden bg-rose/20">
              <Image
                src={`https://picsum.photos/seed/${post.seed}/500/500`}
                alt="Post de demonstração do Instagram Paula Lourenço Store"
                fill
                sizes="(min-width: 768px) 16vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 border border-ink px-7 text-[12px] font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            <InstagramIcon className="h-4 w-4" /> Seguir no Instagram
          </a>
        </div>
        <DemoNotice className="mt-6 text-center" />
      </Container>
    </section>
  );
}
