import BackGround from "../Components/BackGround";
import ButtonLinkHome from "../Components/ButtonLinkHome";
import Header from "../Components/Header";
import NavbarPcW from "../Components/NavbarPcWindow";
import Linkedin from "../assets/static/linkedin.svg";
import Github from "../assets/static/github.svg";
import Instagram from "../assets/static/instagram.svg";
import Form from "../Components/Form";

export default function Contact() {
	return (
		<div className="relative w-full h-full">
			<BackGround />
			<Header />
			<div className="relative h-full p-4 mt-14">
				<div className="md:flex">
					<div className="hidden md:block mr-10">
						<NavbarPcW />
					</div>
                    <div>
                        <h1 className="text-5xl font-bold mb-6 text-blue">
                            Contato
                        </h1>
                        <p className="text-lg font-semibold dark:text-white mb-4">
                            Se você tem ideias inovadoras ou deseja colaborar em projetos criativos, estou sempre pronto para uma conversa. Sinta-se à vontade para entrar em contato e juntos transformaremos suas visões em realidade.
                        </p>
                        <div className="md:flex text-center md:items-center mb-12">
                            <p className="text-xl font-bold mr-8 dark:text-white">
                                Minhas Redes Sociais
                            </p>
                            <div className="grid grid-cols-3 gap-2 mt-3">
                                <ButtonLinkHome
                                    MySVG={Linkedin}
                                    Link={"https://www.linkedin.com/in/caio-cezar-domingos-de-oliveira-01b389228/"}
                                    NameInfo={"Linkedin"}
                                />
                                <ButtonLinkHome 
                                    MySVG={Github}
                                    Link={"https://github.com/SrCaioz"}
                                    NameInfo={"Github"}
                                />
                                <ButtonLinkHome 
                                    MySVG={Instagram}
                                    Link={"https://www.instagram.com/sr.caioz"}
                                    NameInfo={"Instagram"}
                                />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold mb-6 text-blue">
                            Que tal mandar um email?
                        </h1>
                        <p className="text-lg font-semibold dark:text-white mb-4">
                            Estou ansioso para ouvir de você. Deixe-me uma mensagem.
                        </p>
                        <Form />
                    </div>
				</div>
			</div>
		</div>
	);
}
