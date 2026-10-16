import { Link, useParams } from 'react-router-dom';
import Etiqueta from '../components/Etiqueta';
import Preco from '../components/Preco';
import { pratos } from '../data/pratos';

export default function PratoPage() {
  const { id } = useParams();
  const prato = pratos.find((item) => item.id === Number(id));

  if (!prato) {
    return (
      <main className="min-h-screen bg-stone-50 px-4 py-10 text-stone-900 sm:px-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-xl shadow-stone-900/5">
          <h1 className="text-3xl font-bold">Prato não encontrado</h1>
          <Link to="/" className="mt-6 inline-block rounded-lg bg-stone-900 px-5 py-3 font-semibold text-white">Voltar à ementa</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-6 text-stone-900 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <Link to="/" className="mb-6 inline-flex rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm transition hover:border-emerald-700 hover:text-emerald-800">
          ← Voltar à ementa
        </Link>
        <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl shadow-emerald-950/10">
          <div className="flex aspect-square w-full items-center justify-center bg-sky-200 text-xs font-bold uppercase tracking-[0.16em] text-slate-500" aria-label={`Espaço para imagem de ${prato.nome}`}>
            Imagem do prato
          </div>
          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Detalhe do prato</p>
                <h1 className="text-3xl font-bold sm:text-5xl">{prato.nome}</h1>
              </div>
              <strong className="rounded-xl bg-orange-500 px-4 py-2 text-lg text-white shadow-lg shadow-orange-900/15"><Preco valor={prato.preco} /></strong>
            </div>
            <p className="mt-6 text-lg leading-8 text-stone-600">Uma opção preparada na hora, com ingredientes selecionados para a ementa de hoje.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {prato.vegetariano && <Etiqueta texto="Vegetariano" />}
              {prato.alergenios.map((alergenio) => <Etiqueta key={alergenio} texto={alergenio} variante="aviso" />)}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}