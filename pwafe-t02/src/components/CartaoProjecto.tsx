import type { Projecto } from '../types'

type CartaoProjectoProps = {
  projecto: Projecto
}

export default function CartaoProjecto({ projecto }: CartaoProjectoProps) {
  return (
    <article className="flex w-full max-w-md flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">{projecto.titulo}</h2>
        <p className="text-sm text-slate-600">{projecto.descricao}</p>
        <div className="flex flex-wrap gap-2">
            {projecto.tecnologias.map((tecnologia, index) => (
                <span key={index} className="rounded-full bg-sky-100 px-2 py-1 text-xs text-sky-600">
                    {tecnologia}
                </span>
            ))}
        </div>
        {projecto.concluido && (
            <p className="mt-2 rounded-xl bg-green-50 px-4 py-2 text-center text-green-700">
                Concluído
            </p>
        )}
    </article>
  )
}