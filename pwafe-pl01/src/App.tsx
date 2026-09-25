export default function App() {

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
  procuraEstagio: true
};

  return (
    <main>
      <h1>Sobre mim</h1>
      <p>Chamo-me {perfil.nome}.</p>
      <p>Estou no curso de {perfil.curso}.</p>
      <p>Vivo em {perfil.cidade}.</p>
      <p>Os meus interesses incluem {perfil.interesses.join(', ')}. </p>
      <p>Para o ano estou no {perfil.ano + 1}.º ano.</p>
      <p>Estou {perfil.procuraEstagio ? 'à procura de estágio' : 'não estou à procura de estágio'}.</p>
    </main>
  );
}