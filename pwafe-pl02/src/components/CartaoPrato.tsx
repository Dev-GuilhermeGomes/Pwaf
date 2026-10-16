import type { Prato } from '../types';
import Etiqueta from './Etiqueta';
import Preco from './Preco';

type CartaoPratoProps = {
  prato: Prato;
};

export default function CartaoPrato({ prato }: CartaoPratoProps) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold">{prato.nome}</h3>
        <strong className="whitespace-nowrap text-emerald-800"><Preco valor={prato.preco} /></strong>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {prato.vegetariano && <Etiqueta texto="Vegetariano" />}
        {prato.alergenios.map((alergenio) => (
          <Etiqueta key={alergenio} texto={alergenio} variante="aviso" />
        ))}
      </div>
    </article>
  );
}