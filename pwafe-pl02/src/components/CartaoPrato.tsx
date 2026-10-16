import type { Prato } from '../types';
import { Link } from 'react-router-dom';
import Etiqueta from './Etiqueta';
import Preco from './Preco';

type CartaoPratoProps = {
  prato: Prato;
};

export default function CartaoPrato({ prato }: CartaoPratoProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-[0_3px_10px_rgba(28,25,23,0.08)] transition-shadow hover:shadow-[0_8px_20px_rgba(28,25,23,0.14)] sm:flex-row">
      <img src={prato.imagem} alt={prato.nome} className="h-44 w-full object-cover opacity-90 saturate-75 sm:h-auto sm:min-h-48 sm:w-2/5" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">{prato.categoria}</p>
            <h3 className="text-xl font-bold leading-snug text-stone-900">{prato.nome}</h3>
          </div>
          <strong className="whitespace-nowrap text-lg text-emerald-800"><Preco valor={prato.preco} /></strong>
        </div>
        <p className="mt-3 text-sm leading-6 text-stone-600">Uma escolha saborosa da nossa ementa, preparada com ingredientes selecionados.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {prato.vegetariano && <Etiqueta texto="Vegetariano" />}
          {prato.alergenios.map((alergenio) => (
            <Etiqueta key={alergenio} texto={alergenio} variante="aviso" />
          ))}
        </div>
        <Link to={`/prato/${prato.id}`} className="mt-5 self-start rounded-lg bg-emerald-700 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-800">
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}