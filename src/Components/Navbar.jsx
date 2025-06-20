function NavbarToggle() {
    document.getElementById("menu-bar").classList.toggle("change")
    document.getElementById("nav").classList.toggle("change")
    document.getElementById("menu-bg").classList.toggle("change-bg")
}

export default function Navbar() {
	return (
		<>
			<div className="absolute z-20 -top-1 right-5">
				<div
                    id="menu-bar"
					onClick={NavbarToggle}
					className="w-11 h-10 mt-8 mr-0 mb-5 ml-5 cursor-pointer"
				>
					<div id="bar1" className="bar block h-1 w-full bg-white rounded-md transition duration-300 ease-linear -translate-y-1"></div>
					<div id="bar2" className="bar block h-1 w-full bg-white rounded-md transition duration-300 ease-linear"></div>
					<div id="bar3" className="bar block h-1 w-full bg-white rounded-md transition duration-300 ease-linear translate-y-1"></div>
				</div>
				<nav id="nav" className="hidden transition duration-300 ease-linear">
					<ul className="pt-0 pb-0 pr-5 pl-5">
						<a href="" className="pt-5 pb-5 pr-0 pl-0 text-white text-xl ">a</a>
						<a href="" className="pt-5 pb-5 pr-0 pl-0 text-white text-xl ">b</a>
						<a href="" className="pt-5 pb-5 pr-0 pl-0 text-white text-xl ">c</a>
						<a href="" className="pt-5 pb-5 pr-0 pl-0 text-white text-xl ">d</a>
					</ul>
				</nav>
			</div>

			<div id="menu-bg" className="absolute z-10 rounded-full -top-5 -right-full  w-0 h-0 mt-7 mr-0 mb-5 ml-5 bg-radial from-green from-10%% to-blue to-90% blur-md"></div>
		</>
	);
}
