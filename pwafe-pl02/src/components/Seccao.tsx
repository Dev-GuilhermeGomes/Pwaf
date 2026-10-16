import type { ReactNode } from 'react';

type SeccaoProps = {
  titulo: string;
  children: ReactNode;
};

export default function Seccao({ titulo, children }: SeccaoProps) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white/85 p-5 shadow-[0_12px_30px_rgba(80,60,35,0.08)] sm:p-7">
      <div className="mb-5 flex items-center gap-3 border-b border-stone-200 pb-4">
        <span className="h-3 w-3 rounded-full bg-emerald-600" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-stone-900">{titulo}</h2>
      </div>
      {children}
    </section>
  );
}