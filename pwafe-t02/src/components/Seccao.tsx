import type { ReactNode } from 'react'

type SeccaoProps = {
	titulo: string
	children: ReactNode
}

export default function Seccao({ titulo, children }: SeccaoProps) {
	return (
		<section>
			<h2>{titulo}</h2>
			{children}
		</section>
	)
}