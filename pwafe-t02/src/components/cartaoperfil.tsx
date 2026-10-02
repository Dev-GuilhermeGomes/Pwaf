import Avatar from './avatar'
import Etiqueta from './Etiqueta'
import type { Perfil } from '../types'

type CartaoPerfilProps = {
	perfil: Perfil
}

export default function CartaoPerfil({ perfil }: CartaoPerfilProps) {
	return (
		<article className="flex w-full max-w-[430px] items-center gap-[18px] rounded-[10px] border border-slate-200 bg-white px-[18px] py-[14px] shadow-[0_3px_8px_rgb(31_50_81_/_12%)] max-[520px]:flex-col max-[520px]:items-start">
			<Avatar nome={perfil.nome} />
			<div className="min-w-0 flex-1 max-[520px]:w-full">
				<div className="flex min-w-0 items-center gap-[14px]">
					<div className="min-w-0">
						<h2 className="m-0 whitespace-nowrap text-[14px] font-bold leading-tight text-gray-900">{perfil.nome}</h2>
						<p className="m-0 mt-[3px] whitespace-nowrap text-[10px] leading-tight text-slate-500">{perfil.curso} · {perfil.ano}.º ano</p>
					</div>
				</div>
{/* Exibe o mapa dos interesses do aluno */}
				<div className="mt-2 flex flex-wrap gap-[6px]">
				{perfil.interesses.map((interesse, indice) => (
					<Etiqueta
						key={`${interesse}-${indice}`}
						texto={interesse}
						destaque={indice === 0}
					/>
				))}
				</div>
				{perfil.procuraEstagio && (
					<p className="mt-6 rounded-xl bg-green-50 px-4 py-2 text-center text-green-700">
						À procura de estágio
					</p>
				)}
			</div>
		</article>
	)
}
