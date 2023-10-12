/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "#202020",
        tertiary: "#484848",
        black: "#000000",
        "logoColor": "#6070FF",
        "navPages": "#344563",
        "secondBlue": "#7F8CFF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      minWidth: {
        rouselMin: "60vw",
        rousel: "80vw",
        "home-image": "90vw",
        "tab-image": "85vw",
        last: "35vw",
      },
      maxWidth: {
        rousel: "80vw",
        rouselMin: "60vw",
        "home-image": "90vw",
        "tab-image": "85vw",
        "home-image-low": "40vw",
        last: "20vw",
        mid: "50vw",
      },
      minHeight: {
        s: "20vh",
        sPlus: "40vh",
        m: "50vh",
        l: "70vh",
        xl: "80vh",
        "home-image": "90vw",
      },
      maxHeight: {
        s: "20vh",
        sPlus: "40vh",
        m: "50vh",
        l: "70vh",
        xl: "80vh",
      },
      screens: {
        // => @media (min-width: 481px) { ... }
        tablet: "681px",

        // => @media (min-width: 1025px) { ... }
        desktop: "1025px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["light"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};