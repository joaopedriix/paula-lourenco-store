/**
 * Tipos centrais do catálogo — Paula Lourenço Store.
 * Ver seção 41 do BRIEF-ORIGINAL.txt para a estrutura de dados pedida pelo cliente.
 */

export type CategorySlug =
  | "vestidos"
  | "conjuntos"
  | "blusas"
  | "calcas"
  | "shorts"
  | "acessorios";

export type SizeLabel = "PP" | "P" | "M" | "G" | "GG";

export interface ProductColor {
  /** Nome exibido, ex.: "Vinho" */
  nome: string;
  /** Hex real da cor da peça (não confundir com a paleta da marca) */
  hex: string;
  /** Índice da primeira imagem da galeria correspondente a esta cor (opcional) */
  imagemIndex?: number;
}

export interface ProductImage {
  url: string;
  alt: string;
}

export interface SizeMeasurement {
  tamanho: SizeLabel;
  busto: string;
  cintura: string;
  quadril: string;
  comprimento: string;
}

export interface ModelMeasurements {
  altura: string;
  busto: string;
  cintura: string;
  quadril: string;
  tamanhoVestido: SizeLabel;
}

export interface Installment {
  vezes: number;
  valor: number;
}

export interface Product {
  id: string;
  slug: string;
  nome: string;
  categoria: CategorySlug;
  /** Rótulos de ocasião livres, usados na seção "Compre por ocasião" (seção 14) */
  ocasioes?: Array<"dia" | "noite" | "trabalho" | "celebrar">;
  descricaoCurta: string;
  descricaoLonga: string;
  preco: number;
  precoAnterior?: number;
  emPromocao?: boolean;
  parcelamento?: Installment;
  imagens: ProductImage[];
  cores: ProductColor[];
  tamanhos: SizeLabel[];
  /** Estoque por tamanho — 0 significa indisponível/desabilitado no seletor */
  estoque: Partial<Record<SizeLabel, number>>;
  composicao: string[];
  cuidados: string[];
  medidasModelo: ModelMeasurements;
  tabelaMedidas: SizeMeasurement[];
  fechamento?: string;
  forro?: boolean;
  bojo?: boolean;
  elasticidade?: "nenhuma" | "baixa" | "média" | "alta";
  transparencia?: "nenhuma" | "leve" | "média";
  destaque?: boolean;
  novidade?: boolean;
  maisVendido?: boolean;
  ultimasUnidades?: boolean;
  /** ids de produtos relacionados (seção 27) e para "Complete o look" (seção 28) */
  relacionados?: string[];
  completeOLook?: string[];
  criadoEm: string; // ISO date — usado para "Acabaram de chegar"
}

export interface Category {
  slug: CategorySlug;
  nome: string;
  imagem: ProductImage;
  descricao?: string;
}

export interface Testimonial {
  nome: string;
  texto: string;
  estrelas: number;
  /** sempre true nos dados de demonstração — usado para exibir aviso de placeholder */
  placeholder: true;
}
