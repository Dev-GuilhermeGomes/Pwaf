import { useNavigate } from 'react-router-dom'
import type { Perfil } from '../types'

type PerfilPageProps = {
	perfil: Perfil
}

function PerfilPage({ perfil }: PerfilPageProps) {
	const navigate = useNavigate()

	return (
		<main className="min-h-screen bg-slate-100 p-6">
			<div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
				<h1 className="text-3xl font-bold text-slate-800">{perfil.nome}</h1>
				<p className="mt-2 text-lg text-slate-500">
					{perfil.curso} · {perfil.ano}.º ano
				</p>

				<section className="mt-8">
					<h2 className="text-xl font-bold text-slate-700">Sobre mim</h2>
					<p className="mt-3 leading-7 text-slate-600">
						Sou estudante de Desenvolvimento de Software e tenho interesse em desenvolvimento Web, React e experiência de utilizador.
					</p>
				</section>

				<section className="mt-8">
					<h2 className="text-xl font-bold text-slate-700">Interesses</h2>
					<div className="mt-4 flex flex-wrap gap-3">
						{perfil.interesses.map((interesse, indice) => (
							<span key={`${interesse}-${indice}`} className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
								{interesse}
							</span>
						))}
					</div>
				</section>

				<button
					type="button"
					onClick={() => navigate(-1)}
					className="mt-8 rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-800"
				>
					Voltar
				</button>
			</div>
		</main>
	)
}

export default PerfilPage