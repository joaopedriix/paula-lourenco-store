import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StarIcon } from "@/components/ui/icons";
import { DemoNotice } from "@/components/ui/DemoNotice";

/**
 * Prova social (briefing seção 16) — depoimentos PLACEHOLDER, claramente
 * identificados. Substituir por avaliações reais assim que a loja fornecer.
 */
export function Testimonials() {
  return (
    <section className="bg-rose/10 py-14 md:py-20">
      <Container>
        <SectionTitle title="Quem compra, ama ♡" className="mb-8 md:mb-10" />
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.nome}
              className="flex flex-col gap-3 bg-cream p-6 text-center shadow-sm"
            >
              <div className="flex justify-center gap-1 text-wine" aria-hidden="true">
                {Array.from({ length: testimonial.estrelas }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="font-serif text-[15px] leading-relaxed text-ink">
                &ldquo;{testimonial.texto}&rdquo;
              </blockquote>
              <figcaption className="text-[11px] uppercase tracking-[0.12em] text-taupe">
                {testimonial.nome}
              </figcaption>
            </figure>
          ))}
        </div>
        <DemoNotice className="mt-8 text-center" />
      </Container>
    </section>
  );
}
