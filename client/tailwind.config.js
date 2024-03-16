/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f7f8fa",
          "300": "#f3f4f6",
          "400": "#f1f1f1",
        },
        darkslategray: {
          "100": "#484848",
          "200": "#393939",
          "300": "#373737",
        },
        white: "#fff",
        gainsboro: {
          "100": "#e2e2e2",
          "200": "#cfe0e5",
        },
        mediumseagreen: {
          "100": "#38bd75",
          "200": "#1fa45b",
        },
        aliceblue: "#e8f0f5",
        gray: {
          "100": "#868686",
          "200": "#7e7e7e",
        },
        darkgray: "#9c9fa6",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "noto-sans-carian": "'Noto Sans Carian'",
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs": "5px",
        "13xl": "32px",
        "3xs": "10px",
        "6xs": "7px",
        "12xs": "1px",
        "4xs": "9px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      mid: "17px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
