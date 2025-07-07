import Header from "../Components/Header";
import BackGround from "../Components/BackGround";
import FloatingBall from "../Components/FloatingBall";
import Footer from "../Components/Footer";
import 'animate.css';

export default function Home() {
	return (
		<div className="relative h-screen w-screen overflow-hidden">
			<BackGround />
			<Header/>
			<div className="absolute top-16 p-3 left-30 rounded-md bg-gray-300 dark:bg-black">
				<p className="font-bold text-2xl dark:text-white pointer-events-none select-none">
					Olá, eu sou Caio Cezar.
				</p>
			</div>
			<FloatingBall />
			<div className="absolute w-11/12 bottom-26 right-5 p-3 ml-1 mr-2 rounded-md bg-gray-300 dark:bg-black">
				<h1 className="font-bold text-black text-2xl dark:text-white pointer-events-none select-none">
					Seja bem-vindo(a) ao meu Portfólio
				</h1>
				<p className="text-black dark:text-white pointer-events-none select-none">
					Este portfólio nasceu do desejo de compartilhar minha trajetória e projetos, e, através deles, demonstrar minhas habilidades e crescimento profissional.
				</p>
				<h3 className="font-semibold text-2xl text-black dark:text-white pointer-events-none select-none">
					Obrigado pela visita!
				</h3>
			</div>
			<Footer/>
		</div>
	);
}
