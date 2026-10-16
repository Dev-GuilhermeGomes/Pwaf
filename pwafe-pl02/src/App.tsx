
import CartaoPrato from './components/CartaoPrato';
import Etiqueta from './components/Etiqueta';
import ListaPratos from './components/ListaPratos';
import Preco from './components/Preco';
import Seccao from './components/Seccao';
import { pratos } from './data/pratos';

const soVegetarianos = false;

export default function App() {
	const ementa = soVegetarianos ? pratos.filter((prato) => prato.vegetariano) : pratos;
	const sopas = ementa.filter((prato) => prato.categoria === 'sopa');
	const principais = ementa.filter((prato) => prato.categoria === 'prato');
	const sobremesas = ementa.filter((prato) => prato.categoria === 'sobremesa');
	const vegetarianos = pratos.filter((prato) => prato.vegetariano).length;

	return (
		<main className="min-h-screen bg-stone-100 px-4 py-10 text-stone-900 sm:px-8">
			<div className="mx-auto max-w-5xl">
				<header className="mb-10 border-b-2 border-emerald-700 pb-6">
					<p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Restaurante Escola</p>
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Ementa de hoje</h1>
					<p className="mt-3 text-stone-600">{ementa.length} opções, {vegetarianos} vegetarianas</p>
					<div className="mt-5 flex flex-wrap items-center gap-3">
						<Preco valor={5.5} />
						<Etiqueta texto="Normal" />
						<Etiqueta texto="Aviso" variante="aviso" />
					</div>
				</header>

				<div className="space-y-10">
					<Seccao titulo={`Sopas (${sopas.length})`}><ListaPratos pratos={sopas} /></Seccao>
					<Seccao titulo={`Pratos principais (${principais.length})`}><ListaPratos pratos={principais} /></Seccao>
					<Seccao titulo={`Sobremesas (${sobremesas.length})`}><ListaPratos pratos={sobremesas} /></Seccao>
				</div>

				<section className="mt-12 border-t border-stone-300 pt-8">
					<h2 className="mb-4 text-2xl font-bold">Cartão em destaque</h2>
					<CartaoPrato prato={pratos[0]} />
				</section>
			</div>
		</main>
	);
}