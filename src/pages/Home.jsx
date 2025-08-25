import Header from "../Components/Header";
import BackGround from "../Components/BackGround";
import FloatingBall from "../Components/FloatingBall";
import Footer from "../Components/Footer";
import ButtonLinkHome from "../Components/ButtonLinkHome";
import Linkedin from "../assets/static/linkedin.svg";
import Github from "../assets/static/github.svg";
import Instagram from "../assets/static/instagram.svg";
import "animate.css";
import NavbarPcW from "../Components/NavbarPcWindow";

export default function Home() {
	return (
		<div className="relative w-full h-full">
			<BackGround />
			<Header />
			<div className="relative h-full p-4">
				<div className="relative mt-16">
					<div className="md:grid md:grid-cols-3 md:overflow-hidden">
						<div className="hidden md:block">
							<NavbarPcW />
						</div>
						<div className="text-center">
							<p className="font-extrabold text-6xl text-blue mb-2">
								Caio Cezar
							</p>
							<p className="font-semibold dark:text-white mb-2">
								Rio de Janeiro - Brasil
							</p>
							<p className="font-semibold text-2xl dark:text-white mb-2">
								Este portfólio nasceu do desejo de compartilhar minha trajetória
								e projetos, e, através deles, demonstrar minhas habilidades e
								crescimento profissional.
							</p>
							<div className="grid grid-cols-3 gap-2 mt-3">
								<ButtonLinkHome
									Link={
										"https://www.linkedin.com/in/caio-cezar-domingos-de-oliveira-01b389228/"
									}
									MySVG={Linkedin}
									NameInfo={"Linkedin"}
								/>
								<ButtonLinkHome
									Link={"https://github.com/SrCaioz"}
									MySVG={Github}
									NameInfo={"Github"}
								/>
								<ButtonLinkHome
									Link={"https://www.instagram.com/sr.caioz"}
									MySVG={Instagram}
									NameInfo={"Instagram"}
								/>
							</div>
						</div>
						<div className="flex w-full justify-center">
							<FloatingBall />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
