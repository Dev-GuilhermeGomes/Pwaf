type Perfil = {
  nome: string;
  curso: string;
  ano: number;
  cidade: string;
  interesses: string[];
  procuraEstagio: boolean;
};

const perfil: Perfil = {
  nome: 'Guilherme Gomes',
  curso: 'Desenvolvimento de Software',
  ano: 2,
  cidade: 'Porto',
  interesses: ['Programação', 'Design', 'Inovação'],
  procuraEstagio: true,
};

function saudacao(hora: number): string {
  if (hora < 12) return 'Bom dia';
  if (hora < 20) return 'Boa tarde';
  return 'Boa noite';
}

export default function App() {
  const horaAtual = new Date().getHours();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4 text-slate-900">
      <article className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl sm:p-8 md:flex md:items-center md:gap-8 md:text-left">
        <div className="mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-sky-700 text-5xl font-bold text-white md:mx-0">
          {perfil.nome[0]}
        </div>

        <div className="mt-6 text-center md:mt-0">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
            {saudacao(horaAtual)}
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">{perfil.nome}</h1>
          <p className="mt-2 text-slate-500">
            {perfil.curso} · {perfil.ano}.º ano · {perfil.cidade}
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {perfil.interesses.map((interesse) => (
              <span
                key={interesse}
                className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800"
              >
                {interesse}
              </span>
            ))}
          </div>

          {perfil.procuraEstagio && (
            <p className="mt-5 text-sm font-medium text-emerald-700">
              À procura de estágio
            </p>
          )}
        </div>
      </article>
    </main>
  );
}