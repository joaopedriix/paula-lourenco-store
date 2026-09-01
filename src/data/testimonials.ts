import type { Testimonial } from "./types";

/**
 * IMPORTANTE: estes depoimentos são PLACEHOLDER, não avaliações reais de clientes.
 * O briefing (seção 16) proíbe expressamente inventar avaliações como se fossem
 * verdadeiras. Substituir por depoimentos reais assim que a loja fornecer.
 */
export const testimonials: Testimonial[] = [
  {
    nome: "Depoimento de demonstração — cliente A",
    texto: "A peça ficou maravilhosa e o atendimento foi perfeito. (texto placeholder)",
    estrelas: 5,
    placeholder: true,
  },
  {
    nome: "Depoimento de demonstração — cliente B",
    texto: "Chegou rapidinho e o caimento surpreendeu. (texto placeholder)",
    estrelas: 5,
    placeholder: true,
  },
  {
    nome: "Depoimento de demonstração — cliente C",
    texto: "Já é a segunda compra e não erraram no tamanho. (texto placeholder)",
    estrelas: 5,
    placeholder: true,
  },
];
