
import CartaoPrato from './components/CartaoPrato';
import ListaPratos from './components/ListaPratos';
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

	return (
		<main className="min-h-screen bg-sky-100 px-4 py-5 text-slate-700 sm:px-8 sm:py-8">
			<div className="mx-auto max-w-6xl border-x border-sky-300/70 bg-sky-100 px-4 sm:px-8">
				<header className="border-b-2 border-sky-400 pb-5">
					<div className="flex items-center justify-between border-b border-sky-200 pb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
						<span className="font-serif text-lg normal-case tracking-normal text-slate-700">à mesa</span>
						<span>Restaurante</span>
						<span>{new Date().toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
					</div>
					<div className="flex flex-col justify-between gap-6 py-8 sm:flex-row sm:items-end">
						<div>
							<p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Da ementa à sua mesa</p>
							<h1 className="font-serif text-5xl leading-none tracking-tight text-slate-700 sm:text-7xl">Ementa de hoje</h1>
							<p className="mt-4 text-xs text-slate-500">Cozinha do dia, feita com tempo e o melhor de cada estação.</p>
						</div>
						<div className="text-left sm:text-right">
							<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Sexta-feira</p>
							<p className="mt-1 font-serif text-lg text-slate-700">16 de outubro de 2026</p>
						</div>
					</div>
					<nav className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
						<a href="#entradas" className="hover:text-slate-900">Entradas</a>
						<a href="#principais" className="hover:text-slate-900">Pratos principais</a>
						<a href="#sobremesas" className="hover:text-slate-900">Sobremesas</a>
					</nav>
				</header>

				<div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-dotted border-sky-400 px-1 py-5">
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Para começar</p>
						<p className="mt-1 text-sm text-slate-500">Opções preparadas hoje na cozinha da escola.</p>
					</div>
					<span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">Entradas · feitas para partilhar</span>
				</div>

				<div className="space-y-6">
					<div id="entradas"><Seccao titulo={`Sopas (${sopas.length})`}><ListaPratos pratos={sopas} /></Seccao></div>
					<div id="principais"><Seccao titulo={`Pratos principais (${principais.length})`}><ListaPratos pratos={principais} /></Seccao></div>
					<div id="sobremesas"><Seccao titulo={`Sobremesas (${sobremesas.length})`}><ListaPratos pratos={sobremesas} /></Seccao></div>
				</div>

				<section className="mt-10 border-y border-sky-300 py-6">
					<div className="mb-5 flex items-end justify-between gap-4">
						<div>
							<p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Sugestão da casa</p>
							<h2 className="mt-1 text-2xl font-bold text-slate-700">Cartão em destaque</h2>
						</div>
						<span className="hidden text-sm text-slate-400 sm:block">Uma escolha para experimentar hoje</span>
					</div>
					<div className="text-stone-900"><CartaoPrato prato={pratos[0]} /></div>
				</section>
			</div>
		</main>
	);
}