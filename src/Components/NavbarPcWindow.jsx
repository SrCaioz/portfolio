import LinkRoutNavBar from "./LinkRouteNavBar";
import HomeImage from "../assets/animations/home.json";
import About from "../assets/animations/about.json";

export default function NavbarPcW() {
	return (
		<div className=" max-w-72 p-2 rounded-md border border-t-blue border-r-blue border-l-blue border-b-0 bg-blue/12 dark:bg-black/90">
			<div className="w-full border-b-2 border-b-black text-end dark:border-b-white">
				<h1 className="font-extrabold text-2xl dark:text-white">
					Caio Cezar
				</h1>
				<p className="font-semibold dark:text-white">
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
			</ul>
		</div>
	);
}
