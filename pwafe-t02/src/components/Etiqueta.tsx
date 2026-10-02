type EtiquetaProps = {
  texto: string
  destaque?: boolean
}

export default function Etiqueta({
  texto,
  destaque = false,
}: EtiquetaProps) {
  return (
    <span
      className={
        destaque
          ? 'rounded-full bg-sky-500 px-2 py-1 text-xs text-white'
          : 'rounded-full bg-sky-100 px-2 py-1 text-xs text-sky-600'
      }
    >
      {texto}
    </span>
  )
}