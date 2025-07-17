import BackendTechs from "../Components/BackendTechs";
import BackGround from "../Components/BackGround";
import FrontendTechs from "../Components/FrontendTechs";
import MainTechs from "../Components/MainTechs";
import NavbarPcW from "../Components/NavbarPcWindow";
import ToolsTechs from "../Components/ToolTechs";
import Header from "./../Components/Header";

export default function About() {
	return (
		<div className="relative w-full h-full">
			<BackGround />
			<Header />
			<div className="relative h-full p-4 mt-14">
				<div className="md:grid md:grid-cols-3 md:gap-3">
					<div className="hidden md:block">
						<NavbarPcW />
					</div>
					<div className="relative p-2 mb-2 rounded-md bg-gray-300 dark:bg-black">
						<p className="text-black text-xl dark:text-white pointer-events-none select-none">
							Olá! Meu nome é Caio Cezar, sou um desenvolvedor de software em
							busca do meu primeiro emprego como desenvolvedor para criar
							soluções digitais focadas em eficiência, desempenho e boa
							experiência do usuário. <br />
							<br />
							Estou em constante aprendizado, sempre buscando expandir
							conhecimentos e experiências no mundo da tecnologia. <br />
							<br />
							Apaixonado por tecnologia, cursei Gestao de T.I. pela Estacio
							(EaD) e em meus trabalhos tenho focado na área de desenvolvimento
							back-end e front-end. Meu objetivo é construir uma carreira sólida
							e alicerçada sobre valores como dedicação e paixão. <br />
							<br />
							Sou impulsionado pelo aprendizado contínuo, gosto de trabalhar em
							equipe e vejo desafios como oportunidades de crescimento. Sempre
							busco escrever código limpo, bem estruturado e fácil de manter.
							Estou atualmente focado em construir aplicações escaláveis e
							contribuir para projetos que geram um impacto real na vida das
							pessoas.
						</p>
					</div>
					<div className="relative w-full md:p-2">
						<MainTechs NomeTech={"React"} FBL={"Frontend"} N={"1#"} />
						<MainTechs NomeTech={"Node.js"} FBL={"Backend"} N={"2#"} />
						<MainTechs NomeTech={"TypeScript"} FBL={"Linguagem"} N={"3#"} />
						<MainTechs NomeTech={"Express"} FBL={"Backend"} N={"4#"} />
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 font-mono mt-8 mb-4">
					<FrontendTechs />
					<BackendTechs />
					<ToolsTechs />
				</div>
			</div>
		</div>
	);
}
