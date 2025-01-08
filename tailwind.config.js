/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "linear-gradient(214deg, #F2D058 18.99%, #E83752 69.44%)"
      },
      height: {
        "topandbottom-blur-h": "500px"
      },
      width: {
        "topandbottom-blur-w": "500px"
      },
    },
  },
  plugins: [],
}

