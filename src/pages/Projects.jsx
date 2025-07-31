import BackGround from "../Components/BackGround";
import Header from "../Components/Header";
import NavbarPcW from "../Components/NavbarPcWindow";
import Projectwindow from "../Components/Projectwindow"
import ImgPort from "../assets/static/windows-portfolio.png"
import ImgCosts from "../assets/static/windows--costs.png"
import ImgApiCosts from "../assets/static/windows-apicosts.png"
import ImgCocolin from "../assets/static/windows-cocolin.png"

export default function Projects() {
	return (
		<div className="relative w-full h-full">
			<BackGround />
			<Header />
			<div className="relative h-full p-4 mt-14">
				<div className="md:flex">
					<div className="hidden md:block md:w-2/3 md:mr-5">
						<NavbarPcW />
					</div>
					<div className="max-w-full md:grid md:grid-cols-2 gap-5 md:row-span-3">
						<div className="md:col-span-2 mb-4">
							<h1 className="font-bold text-blue text-5xl mb-3">
								Meus Projetos
							</h1>
							<h2 className="font-semibold text-lg dark:text-white">
								Minha jornada de aprendizado abrange uma variedade de projetos web. Nesta página, você encontrará 4 projetos favoritos que representam meu progresso e dedicação à arte da programação web.
							</h2>
						</div>
						<Projectwindow
							Img={ImgPort}
							NameProject={"Meu Portfolio"}
							Text={"Este projeto é meu portfólio pessoal, desenvolvido com foco em performance, responsividade e uma estrutura de código escalável e moderna. O objetivo é apresentar minha trajetória, habilidades, experiências profissionais e projetos de forma clara e objetiva."}
						/>
						<Projectwindow
							Img={ImgCosts}
							NameProject={"Projeto Costs"}
							Text={"Este é um dos meus projetos pessoais para gerenciamento de projetos, desenvolvido com foco em aprender a conexão entre o frontend e o backend através da api-costs."}
						/>
						<Projectwindow
							Img={ImgApiCosts}
							NameProject={"Api-Costs"}
							Text={"Este repositório contém a api-costs desenvolvido em Express que fornece o gerenciamento do banco de dados."}
						/>
						<Projectwindow
							Img={ImgCocolin}
							NameProject={"Cocolin"}
							Text={"Este repositório contém um robo de automação para logar em sua conta, pegar informações do site, baixar arquivos, comparar as informações do site com os arquivos baixados e retonar tudo em ordem."}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}