import CartaoPerfil from './components/cartaoperfil'
import CartaoProjecto from './components/CartaoProjecto'
import type { Perfil, Projecto } from './types'

const perfil: Perfil = {
  nome: 'Guilherme Gomes',
  curso: 'Desenvolvimento de Software',
  ano: 2,
  cidade: 'Porto',
  interesses: ['React', 'React', 'React', 'React'],
  procuraEstagio: false
}

const projectos: Projecto[] = [
  { id: 1, titulo: 'Website', descricao: 'Website para a empresa ', tecnologias: ['React', 'TypeScript', 'Tailwind CSS'], concluido: false },
  { id: 2, titulo: 'Aplicação Mobile', descricao: 'Aplicação mobile para a empresa ', tecnologias: ['React Native', 'TypeScript'], concluido: true },
  { id: 3, titulo: 'Sistema de Gestão', descricao: 'Sistema de gestão para a empresa ', tecnologias: ['React', 'Node.js', 'MongoDB'], concluido: true }
]

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-left">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-slate-900">Perfil</h1>
          <div className="flex flex-row">
            <CartaoPerfil perfil={perfil} />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-slate-900">Projetos</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectos.map((projecto) => (
              <CartaoProjecto key={projecto.id} projecto={projecto} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
export default App
