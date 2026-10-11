import type { Projecto } from '../types'

export const projectos: Projecto[] = [
	{ id: 1, titulo: 'Website', descricao: 'Website para a empresa ', tecnologias: ['React', 'TypeScript', 'Tailwind CSS'], concluido: false },
	{ id: 2, titulo: 'Aplicação Mobile', descricao: 'Aplicação mobile para a empresa ', tecnologias: ['React Native', 'TypeScript'], concluido: true },
	{ id: 3, titulo: 'Sistema de Gestão', descricao: 'Sistema de gestão para a empresa ', tecnologias: ['React', 'Node.js', 'MongoDB'], concluido: true }
]