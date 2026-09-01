/**
 * Dados reais confirmados da loja (ver BRAND.md) + placeholders explícitos
 * para o que ainda não foi fornecido pelo cliente (CNPJ, razão social, etc.).
 * NÃO inventar valores além do que está documentado em BRAND.md.
 */

export const site = {
  nome: "Paula Lourenço Store",
  descricaoCurta:
    "Moda feminina com elegância e delicadeza — peças escolhidas para acompanhar você em todos os momentos.",

  // Dado real — BRAND.md
  whatsappNumeroE164: "5516991073041",
  whatsappExibicao: "+55 16 99107-3041",

  // Dado real — BRAND.md (bio pública do Instagram)
  instagramHandle: "@paulalourenco_store",
  instagramUrl: "https://instagram.com/paulalourenco_store",

  // Dado real — BRAND.md (bio pública do Instagram)
  endereco: {
    linha1: "Rua Pará, 596, Jardim Guarujá",
    linha2: "São Joaquim da Barra - SP (próximo às lagoas)",
  },

  // Placeholders — aguardando fornecimento do cliente (briefing seção 37)
  cnpj: "00.000.000/0000-00 (placeholder — aguardando CNPJ oficial)",
  razaoSocial: "Razão social a confirmar (placeholder)",
} as const;

export const announcementMessages = [
  "Envio para todo o Brasil",
  "Novidades toda semana",
  "Compre online e finalize pelo WhatsApp",
  "Troca fácil",
] as const;
