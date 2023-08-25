/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D2B5B",
        green: "#6FCF97",
        "dark-greem": "#439696",
        "green-tosca": "#80FFDB",
        "dark-purple": "#4C3B73",
        blue: "#2F80ED",
        "soft-blue": "#DDF1F1",
        yellow: "#EBD07D",
        red: "#EB5757",
        mint: "#DFFFF6",
        "gray-1": "#333333s",
        "gray-2": "#4F4F4F",
        "gray-4": "#BDBDBD",
        cream: "#F2C94C33",
        white: "#F2C94C33",
      },
    },
  },
  plugins: [],
}
