import type { Product } from "@/data/types";
import { AccordionItem } from "./AccordionItem";

export function ProductAccordion({ product }: { product: Product }) {
  const detalhes: string[] = [];
  detalhes.push(`Tecido: ${product.composicao.join(", ")}`);
  if (product.fechamento) detalhes.push(`Fechamento: ${product.fechamento}`);
  detalhes.push(`Forro: ${product.forro ? "sim" : "não"}`);
  detalhes.push(`Bojo: ${product.bojo ? "sim" : "não"}`);
  if (product.elasticidade) detalhes.push(`Elasticidade: ${product.elasticidade}`);
  if (product.transparencia) detalhes.push(`Transparência: ${product.transparencia}`);

  return (
    <div>
      <AccordionItem title="Detalhes" defaultOpen>
        <p className="mb-2">{product.descricaoLonga}</p>
        <ul className="flex flex-col gap-1">
          {detalhes.map((linha) => (
            <li key={linha}>• {linha}</li>
          ))}
        </ul>
        <p className="mt-2">
          Modelo veste: {product.medidasModelo.tamanhoVestido} · Altura {product.medidasModelo.altura} · Busto{" "}
          {product.medidasModelo.busto} · Cintura {product.medidasModelo.cintura} · Quadril{" "}
          {product.medidasModelo.quadril}
        </p>
      </AccordionItem>

      <AccordionItem title="Composição">
        <ul className="flex flex-col gap-1">
          {product.composicao.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="Medidas">
        {product.tabelaMedidas.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[380px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-line-cream text-left text-[11px] uppercase tracking-[0.1em] text-taupe">
                  <th className="py-2 pr-3">Tam.</th>
                  <th className="py-2 pr-3">Busto</th>
                  <th className="py-2 pr-3">Cintura</th>
                  <th className="py-2 pr-3">Quadril</th>
                  <th className="py-2">Comp.</th>
                </tr>
              </thead>
              <tbody>
                {product.tabelaMedidas.map((row) => (
                  <tr key={row.tamanho} className="border-b border-line-cream/70">
                    <td className="py-2 pr-3 font-medium text-ink">{row.tamanho}</td>
                    <td className="py-2 pr-3">{row.busto}</td>
                    <td className="py-2 pr-3">{row.cintura}</td>
                    <td className="py-2 pr-3">{row.quadril}</td>
                    <td className="py-2">{row.comprimento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Tabela de medidas não disponível para este produto.</p>
        )}
      </AccordionItem>

      <AccordionItem title="Cuidados">
        <ul className="flex flex-col gap-1">
          {product.cuidados.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="Trocas e devoluções">
        <p>
          Consulte nossa{" "}
          <a href="/trocas" className="text-wine underline-offset-4 hover:underline">
            política de trocas
          </a>{" "}
          — estrutura preparada para receber as regras oficiais da loja.
        </p>
      </AccordionItem>
    </div>
  );
}
