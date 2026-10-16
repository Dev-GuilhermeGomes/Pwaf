
import CartaoPrato from './components/CartaoPrato';
import Etiqueta from './components/Etiqueta';
import ListaPratos from './components/ListaPratos';
import Preco from './components/Preco';
import Seccao from './components/Seccao';
import { pratos } from './data/pratos';
import { Route, Routes } from 'react-router-dom';
import PratoPage from './pages/PratoPage';

const soVegetarianos = false;

export default function App() {
	return (
		<Routes>
			<Route path="/prato/:id" element={<PratoPage />} />
			<Route path="*" element={<EmentaPage />} />
		</Routes>
	);
}

function EmentaPage() {
	const ementa = soVegetarianos ? pratos.filter((prato) => prato.vegetariano) : pratos;
	const sopas = ementa.filter((prato) => prato.categoria === 'sopa');
	const principais = ementa.filter((prato) => prato.categoria === 'prato');
	const sobremesas = ementa.filter((prato) => prato.categoria === 'sobremesa');
	const vegetarianos = pratos.filter((prato) => prato.vegetariano).length;

	return (
		<main className="min-h-screen bg-white px-4 py-6 text-stone-900 sm:px-8 sm:py-10">
			<div className="mx-auto max-w-5xl">
				<header className="relative mb-10 overflow-hidden rounded-3xl bg-[#173f35] px-6 py-10 text-white shadow-[0_18px_40px_rgba(23,63,53,0.2)] sm:px-10 sm:py-14">
					<div className="relative z-10 max-w-2xl">
						<p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Restaurante Escola</p>
						<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Ementa de hoje</h1>
						<p className="mt-4 max-w-lg text-base text-emerald-50/80">Comida simples, feita com tempo e bons ingredientes.</p>
						<div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
							<span className="rounded-full bg-white/10 px-4 py-2">{ementa.length} opções</span>
							<span className="rounded-full bg-white/10 px-4 py-2">{vegetarianos} vegetarianas</span>
							<Preco valor={5.5} />
							<Etiqueta texto="Normal" />
							<Etiqueta texto="Aviso" variante="aviso" />
						</div>
					</div>
					<div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[28px] border-amber-300/20" aria-hidden="true" />
					<div className="absolute -bottom-24 right-24 h-52 w-52 rounded-full border-[18px] border-emerald-200/10" aria-hidden="true" />
				</header>

				<div className="space-y-6">
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