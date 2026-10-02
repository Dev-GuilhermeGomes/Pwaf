type AvatarProps = {
	nome: string
}
// Componente Avatar que exibe a primeira letra do nome do usuário
// A primeira letra do nome é convertida para maiúscula usando o método [0].toUpperCase()
export default function Avatar({ nome }: AvatarProps) {
	return (
		<div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sky-100 text-[14px] font-bold text-sky-600">
			{nome[0].toUpperCase()}
		</div>
	)
}
