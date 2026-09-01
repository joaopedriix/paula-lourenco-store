import { TruckIcon, ChatIcon, ExchangeIcon, SparkleIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";

const BENEFITS = [
  { icon: TruckIcon, label: "Envio para todo o Brasil" },
  { icon: ChatIcon, label: "Compra finalizada pelo WhatsApp" },
  { icon: ExchangeIcon, label: "Troca fácil" },
  { icon: SparkleIcon, label: "Atendimento personalizado" },
] as const;

/**
 * Faixa de benefícios (briefing seção 15) — ícones lineares discretos,
 * nunca em formato de "cartão gigante".
 */
export function BenefitsBar() {
  return (
    <section className="border-y border-line-cream bg-cream py-8">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
          {BENEFITS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <Icon className="h-5 w-5 shrink-0 text-wine" />
              <span className="text-[11px] font-medium uppercase leading-tight tracking-[0.08em] text-ink">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
