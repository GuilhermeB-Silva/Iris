const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding:{
        register:'.625rem 2.875rem .6875rem',
      },
      fontSize:{
        'leading15px':'.9375rem',
        'xms':'0.6rem'
      },
      colors:{
        "bluelight":"#1e97f7",
        'bluehover':'#1E81F7',
        'hover':'#4f46e5',
        'bgmodal':'rgba(0,0,0,0.2)'
      },
      width:{
        '30':'30%',
        '70':'70%',
        '98':'99%'
      },
      fontFamily:{
        sans:['Roboto',...defaultTheme.fontFamily.sans]
      },
      minWidth:{
        'input':'30rem',
        'min320':'320px'
      },
      maxWidth:{
        "30%":'30%',
        '62':'62px'
      },
      gridTemplateRows:{
        'irislayout':'4rem 1fr',
      },
      gridTemplateColumns:{
        'irislayout':'auto repeat(11,1fr)',
        'adjust':'repeat(auto-fit,minmax(60px,auto))'
      },
      zIndex:{
        '99':99,
        '100':100,
        '999':999,
        '-1':-1
      }
    },
    screens:{
      'xsm':'320px',
      'xsmx':'456px',
      'xsm461':'461px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor:['active'],
      display:['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
