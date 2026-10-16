import type { Prato } from '../types';
import Etiqueta from './Etiqueta';
import Preco from './Preco';

type CartaoPratoProps = {
  prato: Prato;
};

export default function CartaoPrato({ prato }: CartaoPratoProps) {
  return (
    <article className="rounded-xl border border-stone-200 bg-stone-50 p-5 shadow-[0_4px_12px_rgba(28,25,23,0.06)] transition-shadow hover:shadow-[0_8px_18px_rgba(28,25,23,0.12)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold leading-snug text-stone-900">{prato.nome}</h3>
        <strong className="whitespace-nowrap rounded-md bg-emerald-700 px-2.5 py-1 text-sm text-white"><Preco valor={prato.preco} /></strong>
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