import { useNavigate, useParams } from 'react-router-dom'
import type { Projecto } from '../types'

type ProjectoPageProps = {
    projectos: Projecto[]
}

function ProjectoPage({ projectos }: ProjectoPageProps) {
    const navigate = useNavigate()
    const { id } = useParams()
    const projecto = projectos.find((item) => item.id === Number(id))

    if (!projecto) {
        return (
            <main className="min-h-screen bg-slate-100 p-6">
                <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
                    <h1 className="text-3xl font-bold text-slate-800">Projeto não encontrado</h1>
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="mt-8 rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-800"
                    >
                        Voltar aos projetos
                    </button>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-slate-100 p-6">
            <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-lg">
                <h1 className="text-3xl font-bold text-slate-800">{projecto.titulo}</h1>
                <p className="mt-2 text-lg text-slate-500">
                    {projecto.descricao}.
                </p>
                <p className="mt-2 text-lg text-slate-500">
                    Tecnologias: {projecto.tecnologias.join(', ')}.
                </p>
                <p className="mt-2 text-lg text-slate-500">
                    Estado: {projecto.concluido ? 'Concluído' : 'Em curso'}.
                </p>

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

export default ProjectoPage