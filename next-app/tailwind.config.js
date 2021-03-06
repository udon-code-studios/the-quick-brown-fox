module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "space-cadet": "#22223B",
        independence: "#4A4E69",
        "heliotrope-gray": "#9A8C98",
        isabelline: "#F2E9E4",
        "raw-sienna": "#D67941",
      },
      fontFamily: {
        "rampart-one": ["Rampart One"],
        "new-tegomin": ["New Tegomin"],
        sans: ["Noto Sans JP"],
        serif: ["Noto Serif JP"],
        "shippori-mincho": ["Shippori Mincho"],
      },
    },
  },
  plugins: [],
};
