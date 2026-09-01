import type { Product } from "./types";

/**
 * ============================================================================
 *  DADOS FICTÍCIOS / DE DEMONSTRAÇÃO — Paula Lourenço Store
 * ============================================================================
 *  Todos os produtos abaixo (nomes, preços, estoque, medidas, composição e
 *  IMAGENS) são de DEMONSTRAÇÃO, criados apenas para testar a interface do
 *  site (briefing seção 42). Eles NÃO representam o catálogo real da loja.
 *
 *  As imagens usam picsum.photos com seed fixa por produto/foto — são fotos
 *  de banco de imagens aleatórias, não fotos reais das peças da Paula
 *  Lourenço Store. Ver o alt text de cada imagem e o aviso de demonstração
 *  exibido no rodapé do site.
 *
 *  Para publicar o catálogo real, basta substituir os campos deste arquivo
 *  (ou migrar para um CMS/headless commerce) mantendo o mesmo formato do
 *  tipo `Product` (src/data/types.ts). Nenhum outro lugar do código deve
 *  conter dados de produto "hardcoded".
 * ============================================================================
 */

export const products: Product[] = [
  {
    "id": "prod-001",
    "slug": "vestido-midi-aurora",
    "nome": "Vestido Midi Aurora",
    "categoria": "vestidos",
    "ocasioes": [
      "noite",
      "celebrar"
    ],
    "descricaoCurta": "Vestido midi em tecido fluido com caimento leve e fechamento discreto lateral.",
    "descricaoLonga": "Vestido midi com modelagem semi-justa no busto e saia levemente evasê, pensado para acompanhar do fim de tarde até a noite. Tecido fluido, com caimento que valoriza o corpo sem marcar.",
    "preco": 189.9,
    "emPromocao": false,
    "parcelamento": {
      "vezes": 3,
      "valor": 63.3
    },
    "imagens": [
      {
        "url": "https://picsum.photos/seed/pl-aurora-0/1000/1300",
        "alt": "Vestido Midi Aurora — frente (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-aurora-1/1000/1300",
        "alt": "Vestido Midi Aurora — costas (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-aurora-2/1000/1300",
        "alt": "Vestido Midi Aurora — lateral (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-aurora-3/1000/1300",
        "alt": "Vestido Midi Aurora — detalhe do tecido (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-aurora-4/1000/1300",
        "alt": "Vestido Midi Aurora — modelo vestindo (imagem de demonstração, não é foto real da peça)"
      }
    ],
    "cores": [
      {
        "nome": "Vinho",
        "hex": "#8a4a4e",
        "imagemIndex": 0
      },
      {
        "nome": "Off-white",
        "hex": "#f4ece7",
        "imagemIndex": 1
      },
      {
        "nome": "Rosa Queimado",
        "hex": "#c99089",
        "imagemIndex": 2
      }
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "PP": 4,
      "P": 8,
      "M": 10,
      "G": 6,
      "GG": 0
    },
    "composicao": [
      "96% viscose",
      "4% elastano"
    ],
    "cuidados": [
      "Lavar à mão ou ciclo delicado",
      "Não usar alvejante",
      "Secar à sombra",
      "Passar a ferro morno pelo avesso"
    ],
    "medidasModelo": {
      "altura": "1,74 m",
      "busto": "84 cm",
      "cintura": "64 cm",
      "quadril": "90 cm",
      "tamanhoVestido": "P"
    },
    "tabelaMedidas": [
      {
        "tamanho": "PP",
        "busto": "82 cm",
        "cintura": "62 cm",
        "quadril": "88 cm",
        "comprimento": "98 cm"
      },
      {
        "tamanho": "P",
        "busto": "86 cm",
        "cintura": "66 cm",
        "quadril": "92 cm",
        "comprimento": "99 cm"
      },
      {
        "tamanho": "M",
        "busto": "90 cm",
        "cintura": "70 cm",
        "quadril": "96 cm",
        "comprimento": "100 cm"
      },
      {
        "tamanho": "G",
        "busto": "94 cm",
        "cintura": "74 cm",
        "quadril": "100 cm",
        "comprimento": "101 cm"
      },
      {
        "tamanho": "GG",
        "busto": "98 cm",
        "cintura": "78 cm",
        "quadril": "104 cm",
        "comprimento": "102 cm"
      }
    ],
    "fechamento": "Zíper invisível lateral",
    "forro": true,
    "bojo": false,
    "elasticidade": "média",
    "transparencia": "nenhuma",
    "destaque": true,
    "novidade": false,
    "maisVendido": true,
    "ultimasUnidades": false,
    "relacionados": [
      "prod-003",
      "prod-006",
      "prod-002"
    ],
    "completeOLook": [
      "prod-003",
      "prod-010"
    ],
    "criadoEm": "2025-11-02"
  },
  {
    "id": "prod-002",
    "slug": "conjunto-helena",
    "nome": "Conjunto Helena",
    "categoria": "conjuntos",
    "ocasioes": [
      "trabalho",
      "dia"
    ],
    "descricaoCurta": "Conjunto de blusa e calça em alfaiataria leve, pronto para vestir sem pensar.",
    "descricaoLonga": "Dupla de blusa cropped e calça de cintura alta em tecido de alfaiataria leve. Combinação pensada para resolver o look do dia com uma única decisão.",
    "preco": 259.9,
    "emPromocao": false,
    "parcelamento": {
      "vezes": 3,
      "valor": 86.63
    },
    "imagens": [
      {
        "url": "https://picsum.photos/seed/pl-helena-0/1000/1300",
        "alt": "Conjunto Helena — frente (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-helena-1/1000/1300",
        "alt": "Conjunto Helena — costas (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-helena-2/1000/1300",
        "alt": "Conjunto Helena — lateral (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-helena-3/1000/1300",
        "alt": "Conjunto Helena — detalhe do tecido (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-helena-4/1000/1300",
        "alt": "Conjunto Helena — modelo vestindo (imagem de demonstração, não é foto real da peça)"
      }
    ],
    "cores": [
      {
        "nome": "Vinho",
        "hex": "#8a4a4e",
        "imagemIndex": 0
      },
      {
        "nome": "Areia",
        "hex": "#d8c3ab",
        "imagemIndex": 1
      }
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "PP": 2,
      "P": 5,
      "M": 7,
      "G": 5,
      "GG": 3
    },
    "composicao": [
      "68% poliéster",
      "29% viscose",
      "3% elastano"
    ],
    "cuidados": [
      "Lavar à mão",
      "Não torcer",
      "Secar em local ventilado, à sombra"
    ],
    "medidasModelo": {
      "altura": "1,72 m",
      "busto": "82 cm",
      "cintura": "62 cm",
      "quadril": "88 cm",
      "tamanhoVestido": "P"
    },
    "tabelaMedidas": [
      {
        "tamanho": "PP",
        "busto": "82 cm",
        "cintura": "62 cm",
        "quadril": "88 cm",
        "comprimento": "98 cm"
      },
      {
        "tamanho": "P",
        "busto": "86 cm",
        "cintura": "66 cm",
        "quadril": "92 cm",
        "comprimento": "99 cm"
      },
      {
        "tamanho": "M",
        "busto": "90 cm",
        "cintura": "70 cm",
        "quadril": "96 cm",
        "comprimento": "100 cm"
      },
      {
        "tamanho": "G",
        "busto": "94 cm",
        "cintura": "74 cm",
        "quadril": "100 cm",
        "comprimento": "101 cm"
      },
      {
        "tamanho": "GG",
        "busto": "98 cm",
        "cintura": "78 cm",
        "quadril": "104 cm",
        "comprimento": "102 cm"
      }
    ],
    "fechamento": "Botões frontais (blusa) + zíper e botão (calça)",
    "forro": false,
    "bojo": false,
    "elasticidade": "baixa",
    "transparencia": "nenhuma",
    "destaque": true,
    "novidade": true,
    "maisVendido": false,
    "ultimasUnidades": false,
    "relacionados": [
      "prod-004",
      "prod-008",
      "prod-001"
    ],
    "completeOLook": [
      "prod-010"
    ],
    "criadoEm": "2025-12-01"
  },
  {
    "id": "prod-003",
    "slug": "blusa-sofia",
    "nome": "Blusa Sofia",
    "categoria": "blusas",
    "ocasioes": [
      "dia",
      "trabalho"
    ],
    "descricaoCurta": "Blusa de manga longa em viscose leve, com detalhe de amarração no punho.",
    "descricaoLonga": "Blusa versátil de manga longa, tecido leve e fresco, com amarração discreta no punho. Fácil de combinar com calça, short ou saia.",
    "preco": 99.9,
    "precoAnterior": 129.9,
    "emPromocao": true,
    "parcelamento": {
      "vezes": 2,
      "valor": 49.95
    },
    "imagens": [
      {
        "url": "https://picsum.photos/seed/pl-sofia-0/1000/1300",
        "alt": "Blusa Sofia — frente (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-sofia-1/1000/1300",
        "alt": "Blusa Sofia — costas (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-sofia-2/1000/1300",
        "alt": "Blusa Sofia — lateral (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-sofia-3/1000/1300",
        "alt": "Blusa Sofia — detalhe do tecido (imagem de demonstração, não é foto real da peça)"
      }
    ],
    "cores": [
      {
        "nome": "Off-white",
        "hex": "#f4ece7",
        "imagemIndex": 0
      },
      {
        "nome": "Vinho",
        "hex": "#8a4a4e",
        "imagemIndex": 1
      },
      {
        "nome": "Preto",
        "hex": "#2b2426",
        "imagemIndex": 2
      }
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "PP": 6,
      "P": 9,
      "M": 9,
      "G": 4,
      "GG": 2
    },
    "composicao": [
      "100% viscose"
    ],
    "cuidados": [
      "Lavar à mão",
      "Não usar alvejante",
      "Passar a ferro morno"
    ],
    "medidasModelo": {
      "altura": "1,74 m",
      "busto": "84 cm",
      "cintura": "64 cm",
      "quadril": "90 cm",
      "tamanhoVestido": "P"
    },
    "tabelaMedidas": [
      {
        "tamanho": "PP",
        "busto": "82 cm",
        "cintura": "62 cm",
        "quadril": "88 cm",
        "comprimento": "98 cm"
      },
      {
        "tamanho": "P",
        "busto": "86 cm",
        "cintura": "66 cm",
        "quadril": "92 cm",
        "comprimento": "99 cm"
      },
      {
        "tamanho": "M",
        "busto": "90 cm",
        "cintura": "70 cm",
        "quadril": "96 cm",
        "comprimento": "100 cm"
      },
      {
        "tamanho": "G",
        "busto": "94 cm",
        "cintura": "74 cm",
        "quadril": "100 cm",
        "comprimento": "101 cm"
      },
      {
        "tamanho": "GG",
        "busto": "98 cm",
        "cintura": "78 cm",
        "quadril": "104 cm",
        "comprimento": "102 cm"
      }
    ],
    "fechamento": "Sem fechamento (veste pela cabeça)",
    "forro": false,
    "bojo": false,
    "elasticidade": "nenhuma",
    "transparencia": "leve",
    "destaque": false,
    "novidade": false,
    "maisVendido": true,
    "ultimasUnidades": false,
    "relacionados": [
      "prod-001",
      "prod-004",
      "prod-009"
    ],
    "completeOLook": [
      "prod-004",
      "prod-010"
    ],
    "criadoEm": "2025-10-18"
  },
  {
    "id": "prod-004",
    "slug": "calca-alfaiataria-luna",
    "nome": "Calça Alfaiataria Luna",
    "categoria": "calcas",
    "ocasioes": [
      "trabalho",
      "dia"
    ],
    "descricaoCurta": "Calça de alfaiataria de cintura alta com caimento reto e vinco frontal.",
    "descricaoLonga": "Calça de alfaiataria com cintura alta, caimento reto e vinco frontal marcado — peça-chave para um guarda-roupa versátil, do escritório ao jantar.",
    "preco": 219.9,
    "emPromocao": false,
    "parcelamento": {
      "vezes": 3,
      "valor": 73.3
    },
    "imagens": [
      {
        "url": "https://picsum.photos/seed/pl-luna-0/1000/1300",
        "alt": "Calça Alfaiataria Luna — frente (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-luna-1/1000/1300",
        "alt": "Calça Alfaiataria Luna — costas (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-luna-2/1000/1300",
        "alt": "Calça Alfaiataria Luna — lateral (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-luna-3/1000/1300",
        "alt": "Calça Alfaiataria Luna — detalhe do tecido (imagem de demonstração, não é foto real da peça)"
      }
    ],
    "cores": [
      {
        "nome": "Preto",
        "hex": "#2b2426",
        "imagemIndex": 0
      },
      {
        "nome": "Areia",
        "hex": "#d8c3ab",
        "imagemIndex": 1
      }
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "PP": 3,
      "P": 6,
      "M": 8,
      "G": 6,
      "GG": 2
    },
    "composicao": [
      "70% poliéster",
      "27% viscose",
      "3% elastano"
    ],
    "cuidados": [
      "Lavar à máquina em ciclo delicado",
      "Não usar alvejante",
      "Passar a ferro morno pelo avesso"
    ],
    "medidasModelo": {
      "altura": "1,72 m",
      "busto": "82 cm",
      "cintura": "62 cm",
      "quadril": "88 cm",
      "tamanhoVestido": "P"
    },
    "tabelaMedidas": [
      {
        "tamanho": "PP",
        "busto": "82 cm",
        "cintura": "62 cm",
        "quadril": "88 cm",
        "comprimento": "98 cm"
      },
      {
        "tamanho": "P",
        "busto": "86 cm",
        "cintura": "66 cm",
        "quadril": "92 cm",
        "comprimento": "99 cm"
      },
      {
        "tamanho": "M",
        "busto": "90 cm",
        "cintura": "70 cm",
        "quadril": "96 cm",
        "comprimento": "100 cm"
      },
      {
        "tamanho": "G",
        "busto": "94 cm",
        "cintura": "74 cm",
        "quadril": "100 cm",
        "comprimento": "101 cm"
      },
      {
        "tamanho": "GG",
        "busto": "98 cm",
        "cintura": "78 cm",
        "quadril": "104 cm",
        "comprimento": "102 cm"
      }
    ],
    "fechamento": "Zíper e botão frontal",
    "forro": true,
    "bojo": false,
    "elasticidade": "baixa",
    "transparencia": "nenhuma",
    "destaque": true,
    "novidade": false,
    "maisVendido": false,
    "ultimasUnidades": false,
    "relacionados": [
      "prod-002",
      "prod-003",
      "prod-009"
    ],
    "completeOLook": [
      "prod-003"
    ],
    "criadoEm": "2025-09-22"
  },
  {
    "id": "prod-005",
    "slug": "short-serena",
    "nome": "Short Serena",
    "categoria": "shorts",
    "ocasioes": [
      "dia"
    ],
    "descricaoCurta": "Short de alfaiataria com cintura alta e barra levemente dobrada.",
    "descricaoLonga": "Short de alfaiataria leve, cintura alta e barra com dobra sutil. Ideal para os dias quentes sem abrir mão de um caimento estruturado.",
    "preco": 139.9,
    "emPromocao": false,
    "parcelamento": {
      "vezes": 2,
      "valor": 69.95
    },
    "imagens": [
      {
        "url": "https://picsum.photos/seed/pl-serena-0/1000/1300",
        "alt": "Short Serena — frente (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-serena-1/1000/1300",
        "alt": "Short Serena — costas (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-serena-2/1000/1300",
        "alt": "Short Serena — lateral (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-serena-3/1000/1300",
        "alt": "Short Serena — detalhe do tecido (imagem de demonstração, não é foto real da peça)"
      }
    ],
    "cores": [
      {
        "nome": "Rosa Queimado",
        "hex": "#c99089",
        "imagemIndex": 0
      },
      {
        "nome": "Off-white",
        "hex": "#f4ece7",
        "imagemIndex": 1
      }
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "PP": 5,
      "P": 7,
      "M": 7,
      "G": 4,
      "GG": 0
    },
    "composicao": [
      "68% poliéster",
      "29% viscose",
      "3% elastano"
    ],
    "cuidados": [
      "Lavar à mão",
      "Secar à sombra"
    ],
    "medidasModelo": {
      "altura": "1,72 m",
      "busto": "82 cm",
      "cintura": "62 cm",
      "quadril": "88 cm",
      "tamanhoVestido": "P"
    },
    "tabelaMedidas": [
      {
        "tamanho": "PP",
        "busto": "82 cm",
        "cintura": "62 cm",
        "quadril": "88 cm",
        "comprimento": "98 cm"
      },
      {
        "tamanho": "P",
        "busto": "86 cm",
        "cintura": "66 cm",
        "quadril": "92 cm",
        "comprimento": "99 cm"
      },
      {
        "tamanho": "M",
        "busto": "90 cm",
        "cintura": "70 cm",
        "quadril": "96 cm",
        "comprimento": "100 cm"
      },
      {
        "tamanho": "G",
        "busto": "94 cm",
        "cintura": "74 cm",
        "quadril": "100 cm",
        "comprimento": "101 cm"
      },
      {
        "tamanho": "GG",
        "busto": "98 cm",
        "cintura": "78 cm",
        "quadril": "104 cm",
        "comprimento": "102 cm"
      }
    ],
    "fechamento": "Zíper e botão frontal",
    "forro": false,
    "bojo": false,
    "elasticidade": "baixa",
    "transparencia": "nenhuma",
    "destaque": false,
    "novidade": true,
    "maisVendido": false,
    "ultimasUnidades": false,
    "relacionados": [
      "prod-003",
      "prod-008",
      "prod-010"
    ],
    "completeOLook": [
      "prod-008"
    ],
    "criadoEm": "2025-12-10"
  },
  {
    "id": "prod-006",
    "slug": "vestido-maya",
    "nome": "Vestido Maya",
    "categoria": "vestidos",
    "ocasioes": [
      "celebrar",
      "noite"
    ],
    "descricaoCurta": "Vestido longo de alças finas com fenda lateral discreta.",
    "descricaoLonga": "Vestido longo de alças finas, caimento fluido e fenda lateral discreta. Pensado para ocasiões especiais, com conforto para dançar a noite toda.",
    "preco": 199.9,
    "precoAnterior": 239.9,
    "emPromocao": true,
    "parcelamento": {
      "vezes": 3,
      "valor": 66.63
    },
    "imagens": [
      {
        "url": "https://picsum.photos/seed/pl-maya-0/1000/1300",
        "alt": "Vestido Maya — frente (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-maya-1/1000/1300",
        "alt": "Vestido Maya — costas (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-maya-2/1000/1300",
        "alt": "Vestido Maya — lateral (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-maya-3/1000/1300",
        "alt": "Vestido Maya — detalhe do tecido (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-maya-4/1000/1300",
        "alt": "Vestido Maya — modelo vestindo (imagem de demonstração, não é foto real da peça)"
      }
    ],
    "cores": [
      {
        "nome": "Vinho",
        "hex": "#8a4a4e",
        "imagemIndex": 0
      },
      {
        "nome": "Preto",
        "hex": "#2b2426",
        "imagemIndex": 1
      }
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "PP": 1,
      "P": 2,
      "M": 0,
      "G": 1,
      "GG": 0
    },
    "composicao": [
      "95% poliéster",
      "5% elastano"
    ],
    "cuidados": [
      "Lavar à mão",
      "Não torcer",
      "Secar pendurado, à sombra"
    ],
    "medidasModelo": {
      "altura": "1,74 m",
      "busto": "84 cm",
      "cintura": "64 cm",
      "quadril": "90 cm",
      "tamanhoVestido": "P"
    },
    "tabelaMedidas": [
      {
        "tamanho": "PP",
        "busto": "82 cm",
        "cintura": "62 cm",
        "quadril": "88 cm",
        "comprimento": "98 cm"
      },
      {
        "tamanho": "P",
        "busto": "86 cm",
        "cintura": "66 cm",
        "quadril": "92 cm",
        "comprimento": "99 cm"
      },
      {
        "tamanho": "M",
        "busto": "90 cm",
        "cintura": "70 cm",
        "quadril": "96 cm",
        "comprimento": "100 cm"
      },
      {
        "tamanho": "G",
        "busto": "94 cm",
        "cintura": "74 cm",
        "quadril": "100 cm",
        "comprimento": "101 cm"
      },
      {
        "tamanho": "GG",
        "busto": "98 cm",
        "cintura": "78 cm",
        "quadril": "104 cm",
        "comprimento": "102 cm"
      }
    ],
    "fechamento": "Zíper invisível lateral",
    "forro": true,
    "bojo": true,
    "elasticidade": "baixa",
    "transparencia": "nenhuma",
    "destaque": true,
    "novidade": false,
    "maisVendido": false,
    "ultimasUnidades": true,
    "relacionados": [
      "prod-001",
      "prod-010",
      "prod-002"
    ],
    "completeOLook": [
      "prod-010"
    ],
    "criadoEm": "2025-08-30"
  },
  {
    "id": "prod-007",
    "slug": "conjunto-bianca",
    "nome": "Conjunto Bianca",
    "categoria": "conjuntos",
    "ocasioes": [
      "dia",
      "celebrar"
    ],
    "descricaoCurta": "Conjunto de saia midi plissada e blusa de alças a tom.",
    "descricaoLonga": "Saia midi plissada combinada com blusa de alças no mesmo tom. Pode ser usado junto ou separado com o restante do guarda-roupa.",
    "preco": 279.9,
    "emPromocao": false,
    "parcelamento": {
      "vezes": 3,
      "valor": 93.3
    },
    "imagens": [
      {
        "url": "https://picsum.photos/seed/pl-bianca-0/1000/1300",
        "alt": "Conjunto Bianca — frente (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-bianca-1/1000/1300",
        "alt": "Conjunto Bianca — costas (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-bianca-2/1000/1300",
        "alt": "Conjunto Bianca — lateral (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-bianca-3/1000/1300",
        "alt": "Conjunto Bianca — detalhe do tecido (imagem de demonstração, não é foto real da peça)"
      }
    ],
    "cores": [
      {
        "nome": "Rosa Queimado",
        "hex": "#c99089",
        "imagemIndex": 0
      },
      {
        "nome": "Vinho",
        "hex": "#8a4a4e",
        "imagemIndex": 1
      }
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "PP": 3,
      "P": 4,
      "M": 6,
      "G": 3,
      "GG": 1
    },
    "composicao": [
      "100% poliéster"
    ],
    "cuidados": [
      "Lavar à mão",
      "Secar à sombra",
      "Passar a ferro morno"
    ],
    "medidasModelo": {
      "altura": "1,72 m",
      "busto": "82 cm",
      "cintura": "62 cm",
      "quadril": "88 cm",
      "tamanhoVestido": "P"
    },
    "tabelaMedidas": [
      {
        "tamanho": "PP",
        "busto": "82 cm",
        "cintura": "62 cm",
        "quadril": "88 cm",
        "comprimento": "98 cm"
      },
      {
        "tamanho": "P",
        "busto": "86 cm",
        "cintura": "66 cm",
        "quadril": "92 cm",
        "comprimento": "99 cm"
      },
      {
        "tamanho": "M",
        "busto": "90 cm",
        "cintura": "70 cm",
        "quadril": "96 cm",
        "comprimento": "100 cm"
      },
      {
        "tamanho": "G",
        "busto": "94 cm",
        "cintura": "74 cm",
        "quadril": "100 cm",
        "comprimento": "101 cm"
      },
      {
        "tamanho": "GG",
        "busto": "98 cm",
        "cintura": "78 cm",
        "quadril": "104 cm",
        "comprimento": "102 cm"
      }
    ],
    "fechamento": "Zíper lateral (saia)",
    "forro": true,
    "bojo": false,
    "elasticidade": "nenhuma",
    "transparencia": "nenhuma",
    "destaque": false,
    "novidade": true,
    "maisVendido": false,
    "ultimasUnidades": false,
    "relacionados": [
      "prod-001",
      "prod-006",
      "prod-009"
    ],
    "completeOLook": [
      "prod-010"
    ],
    "criadoEm": "2025-12-14"
  },
  {
    "id": "prod-008",
    "slug": "blusa-isadora",
    "nome": "Blusa Isadora",
    "categoria": "blusas",
    "ocasioes": [
      "dia",
      "trabalho"
    ],
    "descricaoCurta": "Blusa regata em tricô fino, gola canoa.",
    "descricaoLonga": "Blusa regata em tricô fino com gola canoa. Peça coringa para compor do casual ao chic.",
    "preco": 89.9,
    "emPromocao": false,
    "parcelamento": {
      "vezes": 2,
      "valor": 44.95
    },
    "imagens": [
      {
        "url": "https://picsum.photos/seed/pl-isadora-0/1000/1300",
        "alt": "Blusa Isadora — frente (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-isadora-1/1000/1300",
        "alt": "Blusa Isadora — costas (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-isadora-2/1000/1300",
        "alt": "Blusa Isadora — lateral (imagem de demonstração, não é foto real da peça)"
      }
    ],
    "cores": [
      {
        "nome": "Off-white",
        "hex": "#f4ece7",
        "imagemIndex": 0
      },
      {
        "nome": "Areia",
        "hex": "#d8c3ab",
        "imagemIndex": 1
      },
      {
        "nome": "Preto",
        "hex": "#2b2426",
        "imagemIndex": 2
      }
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "PP": 8,
      "P": 10,
      "M": 10,
      "G": 7,
      "GG": 5
    },
    "composicao": [
      "60% viscose",
      "40% poliamida"
    ],
    "cuidados": [
      "Lavar à mão",
      "Não torcer",
      "Secar em superfície plana"
    ],
    "medidasModelo": {
      "altura": "1,74 m",
      "busto": "84 cm",
      "cintura": "64 cm",
      "quadril": "90 cm",
      "tamanhoVestido": "P"
    },
    "tabelaMedidas": [
      {
        "tamanho": "PP",
        "busto": "82 cm",
        "cintura": "62 cm",
        "quadril": "88 cm",
        "comprimento": "98 cm"
      },
      {
        "tamanho": "P",
        "busto": "86 cm",
        "cintura": "66 cm",
        "quadril": "92 cm",
        "comprimento": "99 cm"
      },
      {
        "tamanho": "M",
        "busto": "90 cm",
        "cintura": "70 cm",
        "quadril": "96 cm",
        "comprimento": "100 cm"
      },
      {
        "tamanho": "G",
        "busto": "94 cm",
        "cintura": "74 cm",
        "quadril": "100 cm",
        "comprimento": "101 cm"
      },
      {
        "tamanho": "GG",
        "busto": "98 cm",
        "cintura": "78 cm",
        "quadril": "104 cm",
        "comprimento": "102 cm"
      }
    ],
    "fechamento": "Sem fechamento (veste pela cabeça)",
    "forro": false,
    "bojo": false,
    "elasticidade": "média",
    "transparencia": "nenhuma",
    "destaque": false,
    "novidade": false,
    "maisVendido": true,
    "ultimasUnidades": false,
    "relacionados": [
      "prod-004",
      "prod-005",
      "prod-009"
    ],
    "completeOLook": [
      "prod-004"
    ],
    "criadoEm": "2025-07-12"
  },
  {
    "id": "prod-009",
    "slug": "calca-wide-nina",
    "nome": "Calça Wide Leg Nina",
    "categoria": "calcas",
    "ocasioes": [
      "dia",
      "trabalho"
    ],
    "descricaoCurta": "Calça wide leg de cintura alta em tecido com leve caimento fluido.",
    "descricaoLonga": "Calça wide leg de cintura alta, pernas amplas e caimento fluido. Alonga a silhueta e é confortável para o dia inteiro.",
    "preco": 209.9,
    "emPromocao": false,
    "parcelamento": {
      "vezes": 3,
      "valor": 69.97
    },
    "imagens": [
      {
        "url": "https://picsum.photos/seed/pl-nina-0/1000/1300",
        "alt": "Calça Wide Leg Nina — frente (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-nina-1/1000/1300",
        "alt": "Calça Wide Leg Nina — costas (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-nina-2/1000/1300",
        "alt": "Calça Wide Leg Nina — lateral (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-nina-3/1000/1300",
        "alt": "Calça Wide Leg Nina — detalhe do tecido (imagem de demonstração, não é foto real da peça)"
      }
    ],
    "cores": [
      {
        "nome": "Vinho",
        "hex": "#8a4a4e",
        "imagemIndex": 0
      },
      {
        "nome": "Preto",
        "hex": "#2b2426",
        "imagemIndex": 1
      }
    ],
    "tamanhos": [
      "PP",
      "P",
      "M",
      "G",
      "GG"
    ],
    "estoque": {
      "PP": 2,
      "P": 5,
      "M": 6,
      "G": 5,
      "GG": 2
    },
    "composicao": [
      "72% poliéster",
      "25% viscose",
      "3% elastano"
    ],
    "cuidados": [
      "Lavar à máquina em ciclo delicado",
      "Secar à sombra"
    ],
    "medidasModelo": {
      "altura": "1,72 m",
      "busto": "82 cm",
      "cintura": "62 cm",
      "quadril": "88 cm",
      "tamanhoVestido": "P"
    },
    "tabelaMedidas": [
      {
        "tamanho": "PP",
        "busto": "82 cm",
        "cintura": "62 cm",
        "quadril": "88 cm",
        "comprimento": "98 cm"
      },
      {
        "tamanho": "P",
        "busto": "86 cm",
        "cintura": "66 cm",
        "quadril": "92 cm",
        "comprimento": "99 cm"
      },
      {
        "tamanho": "M",
        "busto": "90 cm",
        "cintura": "70 cm",
        "quadril": "96 cm",
        "comprimento": "100 cm"
      },
      {
        "tamanho": "G",
        "busto": "94 cm",
        "cintura": "74 cm",
        "quadril": "100 cm",
        "comprimento": "101 cm"
      },
      {
        "tamanho": "GG",
        "busto": "98 cm",
        "cintura": "78 cm",
        "quadril": "104 cm",
        "comprimento": "102 cm"
      }
    ],
    "fechamento": "Zíper e botão frontal",
    "forro": false,
    "bojo": false,
    "elasticidade": "baixa",
    "transparencia": "nenhuma",
    "destaque": false,
    "novidade": false,
    "maisVendido": false,
    "ultimasUnidades": false,
    "relacionados": [
      "prod-004",
      "prod-008",
      "prod-002"
    ],
    "completeOLook": [
      "prod-003"
    ],
    "criadoEm": "2025-11-20"
  },
  {
    "id": "prod-010",
    "slug": "cinto-alma",
    "nome": "Cinto Alma",
    "categoria": "acessorios",
    "ocasioes": [
      "dia",
      "trabalho",
      "celebrar"
    ],
    "descricaoCurta": "Cinto fino de couro sintético com fivela metalizada.",
    "descricaoLonga": "Cinto fino em couro sintético com fivela metalizada tom dourado envelhecido. Finaliza looks com vestidos, calças e conjuntos.",
    "preco": 59.9,
    "emPromocao": false,
    "imagens": [
      {
        "url": "https://picsum.photos/seed/pl-alma-0/1000/1300",
        "alt": "Cinto Alma — frente (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-alma-1/1000/1300",
        "alt": "Cinto Alma — costas (imagem de demonstração, não é foto real da peça)"
      },
      {
        "url": "https://picsum.photos/seed/pl-alma-2/1000/1300",
        "alt": "Cinto Alma — lateral (imagem de demonstração, não é foto real da peça)"
      }
    ],
    "cores": [
      {
        "nome": "Vinho",
        "hex": "#8a4a4e",
        "imagemIndex": 0
      },
      {
        "nome": "Preto",
        "hex": "#2b2426",
        "imagemIndex": 1
      }
    ],
    "tamanhos": [
      "P",
      "M",
      "G"
    ],
    "estoque": {
      "P": 6,
      "M": 9,
      "G": 4
    },
    "composicao": [
      "Couro sintético",
      "Fivela metálica"
    ],
    "cuidados": [
      "Limpar com pano seco",
      "Evitar contato com água"
    ],
    "medidasModelo": {
      "altura": "1,72 m",
      "busto": "82 cm",
      "cintura": "62 cm",
      "quadril": "88 cm",
      "tamanhoVestido": "P"
    },
    "tabelaMedidas": [],
    "fechamento": "Fivela",
    "forro": false,
    "bojo": false,
    "elasticidade": "nenhuma",
    "transparencia": "nenhuma",
    "destaque": false,
    "novidade": true,
    "maisVendido": false,
    "ultimasUnidades": false,
    "relacionados": [
      "prod-001",
      "prod-006",
      "prod-002"
    ],
    "completeOLook": [],
    "criadoEm": "2025-12-18"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoria: string): Product[] {
  return products.filter((p) => p.categoria === categoria);
}

export function getRelatedProducts(product: Product): Product[] {
  if (!product.relacionados?.length) return [];
  return product.relacionados
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}

export function getCompleteTheLook(product: Product): Product[] {
  if (!product.completeOLook?.length) return [];
  return product.completeOLook
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.maisVendido);
}

export function getNewArrivals(): Product[] {
  return [...products]
    .filter((p) => p.novidade)
    .sort((a, b) => new Date(b.criadoEm).getTime() - new Date(a.criadoEm).getTime());
}

export function getFeatured(): Product[] {
  return products.filter((p) => p.destaque);
}

export function getOnSale(): Product[] {
  return products.filter((p) => p.emPromocao);
}

export function getByOccasion(occasion: string): Product[] {
  return products.filter((p) => p.ocasioes?.includes(occasion as never));
}

export const allColorNames: string[] = Array.from(
  new Set(products.flatMap((p) => p.cores.map((c) => c.nome)))
).sort();
