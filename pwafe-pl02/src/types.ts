export type Categoria = 'sopa' | 'prato' | 'sobremesa';

export type Prato = {
id: number;
nome: string;
preco: number;
categoria: Categoria;
vegetariano: boolean;
alergenios: string[];
};