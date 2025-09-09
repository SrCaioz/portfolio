import ToggleNavBarMobileFunc from "../scripts/ToggleNavBarMobileFunc";
import LinkRoutNavBar from "./LinkRouteNavBar";
import HomeImage from "../assets/animations/home.json";
import About from "../assets/animations/about.json";
import Projects from "../assets/animations/projects.json";
import Contact from "../assets/animations/contact.json";

export default function Navbar() {
	return (
		<>
			<div className="absolute z-20 top-6 right-4 md:hidden">
				<div
					id="menu-bar"
					onClick={ToggleNavBarMobileFunc}
					className="absolute right-2 w-11 h-10 cursor-pointer"
				>
					<div
						id="bar1"
						className="bar block h-1 w-full bg-gray-900 dark:bg-white rounded-md transition duration-300 ease-linear -translate-y-1"
					></div>
					<div
						id="bar2"
						className="bar block h-1 w-full bg-gray-900 dark:bg-white rounded-md transition duration-300 ease-linear"
					></div>
					<div
						id="bar3"
						className="bar block h-1 w-full bg-gray-900 dark:bg-white rounded-md transition duration-300 ease-linear translate-y-1"
					></div>
				</div>
				<nav id="nav" className="hidden">
					<ul className="absolute top-10 -right-5 w-56">
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
				</nav>
			</div>

			<div
				id="menu-bg"
				className="absolute z-10 rounded-full -top-5 left-5/6 -right-full transition-all duration-300 ease-in w-0 h-0 bg-blue inset-shadow-sm inset-shadow-black" 
			></div>
		</>
	);
}
