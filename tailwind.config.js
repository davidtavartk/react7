/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Kumbh Sans"', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        "custom-background": "linear-gradient(180deg, #B068E9 0%, #6463E7 100%)",
      },
      boxShadow: {
        "custom-shadow": "0px 50px 50px -20px #35127A7F",
      },
    },
  },
  plugins: [],
};
