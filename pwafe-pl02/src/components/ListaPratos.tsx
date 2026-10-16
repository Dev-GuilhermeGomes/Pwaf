import type { Prato } from '../types';
import CartaoPrato from './CartaoPrato';

type ListaPratosProps = {
  pratos: Prato[];
};

export default function ListaPratos({ pratos }: ListaPratosProps) {
  if (pratos.length === 0) {
    return <p className="text-stone-500">Hoje não há opções nesta categoria.</p>;
  }

  return (
    <div className="flex max-w-4xl flex-col gap-4">
      {pratos.map((prato) => <CartaoPrato key={prato.id} prato={prato} />)}
    </div>
  );
}