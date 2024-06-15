/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: '"Inter", sans-serif'
      },
      backgroundColor: {
        'primary-bg': '#FF3811',
        'button-clr': 'rgba(255, 255, 255, 0.20)'
      },
      // backgroundImage : {
      //   'banner1': 'url("./src/assets/images/banner/1.jpg")',
      //   'banner2': 'url("./src/assets/images/banner/2.jpg")',
      //   'banner3': 'url("./src/assets/images/banner/3.jpg")',
      //   'banner4': 'url("./src/assets/images/banner/4.jpg")',
      // }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

