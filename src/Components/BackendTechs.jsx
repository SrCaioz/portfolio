import ButtonsTechName from "./ButtonsTechName";
import NodeIcon from "../assets/static/nodejs.svg";
import ExpressIcon from "../assets/static/express.svg";
import AxiosIcon from "../assets/static/axios.svg";
import MySQLIcon from "../assets/static/mysql.svg";
import Sequelize from "../assets/static/sequelize.svg";

export default function BackendTechs() {
	return (
		<div className="group transition-all ease-out translate-y-0 translate-x-0 scale-100 opacity-100 ">
			<h3 className="text-2xl font-bold mb-6 transition-colors duration-300 text-black dark:text-white group-hover:text-blue-500">
				Backend
			</h3>
			<div className="grid grid-cols-2 gap-4">
				<ButtonsTechName
					img={NodeIcon}
					imgName={"Node.js"}
					TechName={"Node.js"}
				/>
				<ButtonsTechName
					img={ExpressIcon}
					imgName={"Express"}
					TechName={"Express"}
				/>
				<ButtonsTechName
					img={AxiosIcon}
					imgName={"Axios"}
					TechName={"Axios"}
				/>
				<ButtonsTechName
					img={MySQLIcon}
					imgName={"MySQL"}
					TechName={"MySQL"}
                />
				<ButtonsTechName
					img={Sequelize}
					imgName={"Sequelize"}
					TechName={"Sequelize"}
                />
			</div>
		</div>
	);
}
