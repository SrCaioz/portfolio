import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true, // opcional: permite não importar describe/it/expect se quiser
		setupFiles: "./src/setupTests.ts",
		include: ["src/**/*.test.{js,jsx,ts,tsx}"], // garanta que seu arquivo segue esse padrão
	},
});
