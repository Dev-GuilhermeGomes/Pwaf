import type { ReactNode } from 'react';

type SeccaoProps = {
  titulo: string;
  children: ReactNode;
};

export default function Seccao({ titulo, children }: SeccaoProps) {
  return (
    <section className="rounded-2xl border-2 border-stone-200 bg-white p-5 shadow-[0_8px_24px_rgba(28,25,23,0.08)] sm:p-7">
      <div className="mb-5 flex items-center gap-3 border-b-2 border-stone-100 pb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-sm font-bold text-white" aria-hidden="true">+</span>
        <h2 className="text-2xl font-bold text-stone-900">{titulo}</h2>
      </div>
      {children}
    </section>
  );
}