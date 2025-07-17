import { useState, useEffect } from "react";

export function SwitchTheme() {
	const [theme, setTheme] = useState("light");
	const [checked, setChecked] = useState(() => {
		return (
			localStorage.getItem("@dark-mode-react-tailwind:theme-1.0.0") === "dark"
		);
	});

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";

		localStorage.setItem("@dark-mode-react-tailwind:theme-1.0.0", newTheme);

		setTheme(newTheme);
		setChecked(newTheme === "dark");

		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	useEffect(() => {
		const themeFromLocalStorage = localStorage.getItem(
			"@dark-mode-react-tailwind:theme-1.0.0"
		);

		if (themeFromLocalStorage) {
			setTheme(themeFromLocalStorage);
			setChecked(themeFromLocalStorage === "dark");

			document.documentElement.classList.toggle(
				"dark",
				themeFromLocalStorage === "dark"
			);
		}
	}, []);

    return { checked, toggleTheme }
}