type Variante = 'normal' | 'aviso';

type EtiquetaProps = {
  texto: string;
  variante?: Variante;
};

export default function Etiqueta({ texto, variante = 'normal' }: EtiquetaProps) {
  const classes = variante === 'aviso'
    ? 'bg-amber-100 text-amber-900'
    : 'bg-emerald-100 text-emerald-900';

  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${classes}`}>{texto}</span>;
}