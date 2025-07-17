import "animate.css";

export default function Footer() {
	return (
		<footer className="fixed -bottom-1 w-full rounded-t-md bg-slate-200 dark:bg-black">
			<div className="flex justify-center items-center text-center text-black dark:text-white">
				<p className="animate__animated animate__repeat-1 animate__fadeInDown max-w-3/4 p-2 text-md">
					Feito com amor por Caio Cezar © Todos os direitos reservados. 2025
				</p>
			</div>
		</footer>
	);
}
