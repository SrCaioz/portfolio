import Header from "../Components/Header";

import BackGround from "../Components/BackGround";


export default function Home() {
	return (
		<div className="relative h-screen w-screen overflow-hidden">
			<BackGround />
			<Header className={"absolute w-full -top-0.5"}/>
			<p className="relative text-white text-2xl  -top-8">
				Conteúdo que fica por cima 🌟
			</p>
		</div>
	);
}
