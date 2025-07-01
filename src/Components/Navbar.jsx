function NavbarToggle() {
	document.getElementById("menu-bar").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

export default function Navbar() {
	return (
		<>
			<div className="absolute z-20 top-6 right-4">
				<div
					id="menu-bar"
					onClick={NavbarToggle}
					className="w-11 h-10  cursor-pointer"
				>
					<div
						id="bar1"
						className="bar block h-1 w-full bg-gray-900 dark:bg-white  rounded-md transition duration-300 ease-linear -translate-y-1"
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
				<nav id="nav" className="hidden transition duration-300 ease-linear">
					<ul className="h-52 w-auto ">
						<li className="mt-5">
							<a href="" className="p-4 text-white text-xl ">
								a
							</a>
						</li>
						<li className="mt-5">
							<a href="" className="p-4 text-white text-xl ">
								b
							</a>
						</li>
						<li className="mt-5">
							<a href="" className="p-4 text-white text-xl ">
								c
							</a>
						</li>
						<li className="mt-5">
							<a href="" className="p-4 text-white text-xl ">
								d
							</a>
						</li>
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
