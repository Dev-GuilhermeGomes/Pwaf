import type { Prato } from '../types';

export const pratos: Prato[] = [
	{ id: 1, nome: 'Sopa de legumes', preco: 1.2, imagem: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85', categoria: 'sopa', vegetariano: true, alergenios: ['aipo'] },
	{ id: 2, nome: 'Bacalhau com natas', preco: 5.5, imagem: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85', categoria: 'prato', vegetariano: false, alergenios: ['peixe', 'leite', 'glúten'] },
	{ id: 3, nome: 'Caril de grão', preco: 4.8, imagem: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85', categoria: 'prato', vegetariano: true, alergenios: [] },
	{ id: 4, nome: 'Lasanha de legumes', preco: 6.2, imagem: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1000&q=85', categoria: 'prato', vegetariano: false, alergenios: ['leite', 'glúten'] },
	{ id: 5, nome: 'Arroz doce', preco: 2.5, imagem: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85', categoria: 'sobremesa', vegetariano: true, alergenios: ['leite'] },
	{ id: 6, nome: 'Salada de fruta', preco: 2.2, imagem: 'https://images.unsplash.com/photo-1490474418585-ba9bad8?auto=format&fit=crop&w=1000&q=85', categoria: 'sobremesa', vegetariano: true, alergenios: [] },
];