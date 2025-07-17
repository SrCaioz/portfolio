import Navbar from "../Components/Navbar";
import { FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "../Components/SwithTheme";
import { SwitchTheme } from "../scripts/SwitchThemeFunc";
import "animate.css";

export default function Header() {
	const { checked, toggleTheme } = SwitchTheme();

	return (
		<div className="fixed w-full h-14 -top-0.5 z-20">
			<div className="w-full h-full bg-gray-50/40 backdrop-blur-md">
				<Navbar />
				<div className="absolute top-3 right-15 p-0 md:right-0">
					<FormControlLabel
						control={
							<MaterialUISwitch onChange={toggleTheme} checked={checked} />
						}
					/>
				</div>
			</div>
		</div>
	);
}
