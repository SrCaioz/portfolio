import ButtonsTechName from "./ButtonsTechName";
import GitIcon from "../assets/static/git.svg";
import ZodIcon from "../assets/static/zod.svg";
import JestIcon from "../assets/static/jest.svg";
import PuppeteerIcon from "../assets/static/puppeteer.svg";

export default function ToolsTechs() {
	return (
		<div className="group transition-all ease-out translate-y-0 translate-x-0 scale-100 opacity-100 ">
			<h3 className="text-2xl font-bold mb-6 transition-colors duration-300 text-black dark:text-white group-hover:text-blue-500">
				Ferramentas
			</h3>
			<div className="grid grid-cols-2 gap-4">
				<ButtonsTechName
					img={GitIcon}
					imgName={"Git"}
					TechName={"Git"}
				/>
				<ButtonsTechName
					img={ZodIcon}
					imgName={"Zod"}
					TechName={"Zod"}
				/>
				<ButtonsTechName 
                    img={JestIcon}
                    imgName={"Jest"}
                    TechName={"Jest"} 
                />
				<ButtonsTechName
                    img={PuppeteerIcon}
                    imgName={"Puppeteer"}
                    TechName={"Puppeteer"}
                />
			</div>
		</div>
	);
}
