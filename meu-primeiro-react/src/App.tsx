import './App.css'

type Perfil = {
  nome: string
  curso: string
  ano: number
  interesses: string[]
  procuraEstagio: boolean
}

const perfil: Perfil = {
  nome: 'Guilherme',
  curso: 'Desenvolvimento de Software',
  ano: 2,
  interesses: ['Programação', 'Jogos', 'Música'],
  procuraEstagio: true
}

function App() {
  return (
    <main >
      <article className="mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-lg">
  <div className="flex items-center gap-4">
    <div className="h-14 w-14 rounded-full bg-slate-200"></div>
    <div>
      <h2 className="text-lg font-bold">{perfil.nome}</h2>
      <p className="text-slate-500">{perfil.curso} · {perfil.ano}.º ano</p>
    </div>
  </div>

  <h3 className="mt-6 text-sm font-semibold text-slate-700">Interesses</h3>
  <div className="mt-2 flex flex-wrap gap-2">
    {perfil.interesses.map((interesse ) => (
      <span
        key={interesse}
        className="rounded-full bg-sky-100 px-3 py-1 text-sky-700"
      >
        {interesse}
      </span>
    ))}
  </div>

  {perfil.procuraEstagio && (
    <p className="mt-6 rounded-xl bg-green-50 px-4 py-2 text-center text-green-700">
      À procura de estágio
    </p>
  )}
</article>
    </main>
    )
}
export default App
