/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg-img': "url('/public/images/login-signin-img.png')",
      }
    },
  },
  plugins: [],
}

