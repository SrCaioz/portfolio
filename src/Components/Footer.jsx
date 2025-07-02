import HoverFunc from "../scripts/HoverFunc";
import Github from "../assets/animations/githubjson.json";
import Email from "../assets/animations/email.json"

export default function Footer() {
	return (
		<footer className="absolute -bottom-1 w-screen rounded-t-md bg-gray-400 dark:bg-gray-700">
			<div className="flex justify-center align-middle">
				<a href="mailto:caiocezar.domingosdeoliveira@gmail.com" rel="noopener noreferrer">
					<HoverFunc myImages={Email} />
				</a>
				<a href="https://github.com/Skarzyll" target="_blank" rel="noopener noreferrer">
					<HoverFunc myImages={Github} />
				</a>
			</div>
		</footer>
	);
}
