/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg-img": "url('/public/images/login-signin-img.png')"
      },
      backgroundColor: {
        scrolled: "#000"
      }
    }
  },
  variants: {
    extend: {},
    backgroundColor: ["scrolled"]
  },
  plugins: []
};

