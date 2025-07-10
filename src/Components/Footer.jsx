import HoverFunc from "../scripts/HoverFunc";
import Github from "../assets/animations/githubjson.json";
import Email from "../assets/animations/email.json"
import Linkedin from "../assets/animations/linkedin.json"
import 'animate.css';

export default function Footer() {
	return (
		<footer className="absolute -bottom-1 w-screen rounded-t-md bg-gray-400 dark:bg-gray-700">
			<div className="flex justify-center items-center ">
				<a href="https://www.linkedin.com/in/caio-cezar-domingos-de-oliveira-01b389228/" target="_blank" rel="noopener noreferrer" className="animate__animated animate__repeat-1 animate__fadeInDown">
					<HoverFunc myImages={Linkedin} />
				</a>
				<a href="mailto:caiocezar.domingosdeoliveira@gmail.com" rel="noopener noreferrer" className="animate__animated animate__repeat-1 animate__fadeInDown">
					<HoverFunc myImages={Email} />
				</a>
				<a href="https://github.com/Skarzyll" target="_blank" rel="noopener noreferrer" className="animate__animated animate__repeat-1 animate__fadeInDown">
					<HoverFunc myImages={Github} />
				</a>
			</div>
		</footer>
	);
}
