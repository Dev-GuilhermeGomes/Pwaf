type Produto = {
nome: string;
preco: number;
emStock: boolean;
};
const produto: Produto = {
nome: 'Teclado',
preco: 49.90,
emStock: true,
};
function precoComIva(valor: number): number {
return valor * 1.23;
}
export default function Loja() {
return <p>{produto.nome}: {precoComIva(produto.preco)} €</p>;
}