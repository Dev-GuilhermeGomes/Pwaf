type PrecoProps = {
  valor: number;
};

export default function Preco({ valor }: PrecoProps) {
  return <span>{valor.toFixed(2).replace('.', ',')} €</span>;
}