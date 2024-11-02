
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        background: '#669BBC', 
        // background: '#21243D',
        text: '#FDF0D5', 
        navColour: '#2B4858',
      },
      fontFamily: {
        absans: ["Absans-Regular", "sans-serif"],
        serif: ["Georgia", "serif"],
        calistoga: ["Calistoga", "serif"],
      },
    },
  },
  plugins: [
    require("daisyui"), 
  ],
  daisyui: {
    themes: false,
  },
};
