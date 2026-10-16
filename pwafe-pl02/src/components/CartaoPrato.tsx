import type { Prato } from '../types';
import { Link } from 'react-router-dom';
import Etiqueta from './Etiqueta';
import Preco from './Preco';

type CartaoPratoProps = {
  prato: Prato;
};

export default function CartaoPrato({ prato }: CartaoPratoProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50 shadow-[0_4px_12px_rgba(28,25,23,0.06)] transition-shadow hover:shadow-[0_8px_18px_rgba(28,25,23,0.12)]">
      <img src={prato.imagem} alt="" className="h-28 w-full object-cover opacity-90 saturate-75" />
      <div className="p-5">
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
      <Link to={`/prato/${prato.id}`} className="mt-5 block rounded-lg bg-stone-900 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-800">
        Ver prato
      </Link>
      </div>
    </article>
  );
}