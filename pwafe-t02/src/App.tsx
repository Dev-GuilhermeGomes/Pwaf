import CartaoPerfil from './components/cartaoperfil'
import CartaoProjecto from './components/CartaoProjecto'
import PerfilPage from './pages/PerfilPage'
import { Route, Routes } from 'react-router-dom'
import type { Perfil } from './types'
import ProjectoPage from './pages/Projetospage'
import { projectos } from './Data/dados'

const perfil: Perfil = {
  nome: 'Guilherme Gomes',
  curso: 'Desenvolvimento de Software',
  ano: 2,
  cidade: 'Porto',
  interesses: ['React', 'React', 'React', 'React'],
  procuraEstagio: false
}

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <main className="min-h-screen bg-slate-100 px-4 py-8 text-left">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            <section className="flex flex-col gap-3">
              <h1 className="text-xl font-bold text-slate-900">Perfil</h1>
              <div className="flex flex-row">
                <CartaoPerfil perfil={perfil} />
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-slate-900">Projetos concluídos</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projectos.filter((projecto) => projecto.concluido).map((projecto) => (
                  <CartaoProjecto key={projecto.id} projecto={projecto} />
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-slate-900">Projetos pendentes</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projectos.filter((projecto) => !projecto.concluido).map((projecto) => (
                  <CartaoProjecto key={projecto.id} projecto={projecto} />
                ))}
              </div>
            </section>

          </div>
        </main>
      } />
      <Route path="/perfil" element={<PerfilPage perfil={perfil} />} />
      <Route path="/projeto/:id" element={<ProjectoPage projectos={projectos} />} />
    </Routes>
  )
}
export default App
