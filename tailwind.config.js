/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#2452C7",
        "color-primary-lighter": "#5179e0",
        "color-primary-lightest": "#93b0fa",
        "color-primary-darker": "#112f7a",
        "color-primary-darkest": "#061b52",
        "color-grey-lightest": "#f2f6ff",
        "color-grey-lighter": "#9faac7",
        "color-grey": "#778096",
        "color-grey-darker": "#434b5e",
        "color-grey-darkest": "#141821",
      },
    },
  },
  plugins: [],
};
