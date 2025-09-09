import LinkRoutNavBar from "./LinkRouteNavBar";
import HomeImage from "../assets/animations/home.json";
import About from "../assets/animations/about.json";
import Projects from "../assets/animations/projects.json";
import Contact from "../assets/animations/contact.json";

export default function NavbarPcW() {
	return (
		<div className="min-w-56 max-w-72 p-2 rounded-md bg-blue">
			<div className="w-full border-b-2 text-end border-b-white">
				<h1 className="font-extrabold text-2xl text-white">
					Caio Cezar
				</h1>
				<p className="font-semibold text-white">
					Fullstack Developer
				</p>
			</div>
			<ul className="mt-3">
				<LinkRoutNavBar
					Route={"/"}
					Text={"Página inicial"}
					MyImageNavBar={HomeImage}
				/>
				<LinkRoutNavBar
					Route={"/Sobre"}
					Text={"Sobre mim"}
					MyImageNavBar={About}
				/>
				<LinkRoutNavBar
					Route={"/Projetos"}
					Text={"Projetos"}
					MyImageNavBar={Projects}
				/>
				<LinkRoutNavBar
					Route={"/Contato"}
					Text={"Contato"}
					MyImageNavBar={Contact}
				/>
			</ul>
		</div>
	);
}
