import type { Prato } from '../types';

export const pratos: Prato[] = [
	{ id: 1, nome: 'Sopa de legumes', preco: 1.2, categoria: 'sopa', vegetariano: true, alergenios: ['aipo'] },
	{ id: 2, nome: 'Bacalhau com natas', preco: 5.5, categoria: 'prato', vegetariano: false, alergenios: ['peixe', 'leite', 'glúten'] },
	{ id: 3, nome: 'Caril de grão', preco: 4.8, categoria: 'prato', vegetariano: true, alergenios: [] },
	{ id: 4, nome: 'Lasanha de legumes', preco: 6.2, categoria: 'prato', vegetariano: false, alergenios: ['leite', 'glúten'] },
	{ id: 5, nome: 'Arroz doce', preco: 2.5, categoria: 'sobremesa', vegetariano: true, alergenios: ['leite'] },
	{ id: 6, nome: 'Salada de fruta', preco: 2.2, categoria: 'sobremesa', vegetariano: true, alergenios: [] },
];