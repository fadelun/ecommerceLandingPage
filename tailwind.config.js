module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        01: "hsl(26, 100%, 55%)",
        02: "hsl(25, 100%, 94%)",
      },
      blue: {
        01: "#1D2325",
        02: "#68707D",
        03: "#B6BCC8",
      },
      white: {
        01: "#F7F8FD",
        02: "#FFFFFF",
      },
      transparent: "transparent",
      opacity: "rgba(0, 0, 0, 0.75)",
      black: "rgb(0 0 0)",
    },
    fontFamily: {
      body: ["Kumbh Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
