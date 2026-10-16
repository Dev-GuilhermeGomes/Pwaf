import type { ReactNode } from 'react';

type SeccaoProps = {
  titulo: string;
  children: ReactNode;
};

export default function Seccao({ titulo, children }: SeccaoProps) {
  return (
    <section className="border-b border-dotted border-sky-400 pb-5 pt-2">
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-sky-200 pb-3">
        <h2 className="font-serif text-2xl font-normal text-slate-700">{titulo}</h2>
        <span className="text-[10px] uppercase tracking-[0.12em] text-slate-400">Disponível hoje</span>
      </div>
      {children}
    </section>
  );
}