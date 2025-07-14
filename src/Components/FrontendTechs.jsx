import ButtonsTechName from "./ButtonsTechName";
import ReactIcon from "../assets/static/react.svg"
import NextIcon from "../assets/static/nextjs.svg"
import TypeScriptIcon from "../assets/static/typescript.svg"
import JavaScriptIcon from "../assets/static/javascript.svg"
import HtmlIcon from "../assets/static/html5.svg"
import CssIcon from "../assets/static/css3.svg"
import TailwindCssIcon from "../assets/static/tailwindcss.svg"
import MaterialUIIcon from "../assets/static/materialui.svg"
import BootstrapIcon from "../assets/static/bootstrap.svg"
import BulmaIcon from "../assets/static/bulma.svg"
import ShadCNIcon from "../assets/static/shadcn.svg"
import StyledComponentsIcon from "../assets/static/styled-components.svg"

export default function FrontendTechs() {
	return (
		<div className="group transition-all ease-out translate-y-0 translate-x-0 scale-100 opacity-100 ">
			<h3 className="text-2xl font-bold mb-6 transition-colors duration-300 text-black dark:text-white group-hover:text-blue-500">
				Frontend
			</h3>
			<div className="grid grid-cols-2 gap-4">
				<ButtonsTechName
					img={ReactIcon}
					imgName={"React"}
					TechName={"React"}
				/>
				<ButtonsTechName
					img={NextIcon}
					imgName={"Next.js"}
					TechName={"Next.js"}
				/>
				<ButtonsTechName
					img={TypeScriptIcon}
					imgName={"TypeScript"}
					TechName={"TypeScript"}
				/>
				<ButtonsTechName
					img={JavaScriptIcon}
					imgName={"JavaScript"}
					TechName={"JavaScript"}
				/>
				<ButtonsTechName
					img={HtmlIcon}
					imgName={"HTML5"}
					TechName={"HTML5"}
				/>
				<ButtonsTechName
					img={CssIcon}
					imgName={"CSS3"}
					TechName={"CSS3"}
				/>
				<ButtonsTechName
					img={TailwindCssIcon}
					imgName={"TailwindCss"}
					TechName={"TailwindCss"}
				/>
				<ButtonsTechName
					img={MaterialUIIcon}
					imgName={"MaterialUI"}
					TechName={"MaterialUI"}
				/>
				<ButtonsTechName
					img={BootstrapIcon}
					imgName={"Bootstrap"}
					TechName={"Bootstrap"}
				/>
				<ButtonsTechName
					img={BulmaIcon}
					imgName={"Bulma"}
					TechName={"Bulma"}
				/>
				<ButtonsTechName
					img={ShadCNIcon}
					imgName={"Shadcn/ui"}
					TechName={"Shadcn/ui"}
				/>
				<ButtonsTechName
					img={StyledComponentsIcon}
					imgName={"Styled Components"}
					TechName={"Styled Components"}
				/>
			</div>
		</div>
	);
}
