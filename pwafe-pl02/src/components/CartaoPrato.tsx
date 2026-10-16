import type { Prato } from '../types';
import { Link } from 'react-router-dom';
import Etiqueta from './Etiqueta';
import Preco from './Preco';

type CartaoPratoProps = {
  prato: Prato;
};

export default function CartaoPrato({ prato }: CartaoPratoProps) {
  return (
    <article className="group flex min-h-40 flex-col overflow-hidden rounded-md border border-sky-200 bg-sky-50/80 transition-all duration-300 hover:border-sky-400 hover:bg-white hover:shadow-md sm:flex-row">
      <div className="flex aspect-square w-full items-center justify-center bg-sky-200 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 transition-colors group-hover:bg-sky-300 sm:w-2/5" aria-label={`Espaço para imagem de ${prato.nome}`}>
        Imagem
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">{prato.categoria}</p>
            <h3 className="text-base font-semibold leading-snug text-slate-700">{prato.nome}</h3>
          </div>
          <strong className="whitespace-nowrap text-sm text-slate-700"><Preco valor={prato.preco} /></strong>
        </div>
        <p className="mt-2 text-[11px] leading-4 text-slate-500">Uma escolha saborosa da nossa ementa, preparada com ingredientes selecionados.</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {prato.vegetariano && <Etiqueta texto="Vegetariano" />}
          {prato.alergenios.map((alergenio) => (
            <Etiqueta key={alergenio} texto={alergenio} variante="aviso" />
          ))}
        </div>
        <Link to={`/prato/${prato.id}`} className="mt-3 self-start text-[10px] font-bold uppercase tracking-[0.1em] text-slate-600 underline decoration-sky-400 underline-offset-4 transition hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400">
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}