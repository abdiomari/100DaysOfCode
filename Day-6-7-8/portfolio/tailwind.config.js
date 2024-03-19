import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          100: "#b2ebf2",
          900: "#006064",
          800: "#00838f",
        },
        bluegray: {
          100: "#cfd8dc",
          200: "#b0bec5",
          
        },
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
});