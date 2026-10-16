import type { ReactNode } from 'react';

type SeccaoProps = {
  titulo: string;
  children: ReactNode;
};

export default function Seccao({ titulo, children }: SeccaoProps) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">{titulo}</h2>
      {children}
    </section>
  );
}