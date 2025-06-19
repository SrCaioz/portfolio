/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      height: {
        "topandbottom-blur-h": "500px",
      },
      width: {
        "topandbottom-blur-w": "500px",
      },
      colors: {
        "blue": "#1d4ed8",
        "green": "#16a34a",
      },
    },
  },
  plugins: [],
}

