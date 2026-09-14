import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

export const portfolioTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f5f0ff', 100: '#eadeff', 200: '#d9c4ff', 300: '#c6a6ff',
      400: '#b99aff', 500: '#9964f5', 600: '#7f46df', 700: '#6631ba',
      800: '#522995', 900: '#432477', 950: '#25133e',
    },
    focusRing: { width: '2px', style: 'solid', color: '#b99aff', offset: '3px' },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff', 50: '#f3eff7', 100: '#e7e0eb', 200: '#cfc4d5', 300: '#b0a4b8',
          400: '#8d8197', 500: '#6b6075', 600: '#494052', 700: '#302a38', 800: '#19161f',
          900: '#101017', 950: '#09090f',
        },
        primary: { color: '#b99aff', contrastColor: '#120b20', hoverColor: '#d3bbff', activeColor: '#c6a6ff' },
        highlight: { background: '#302340', focusBackground: '#3b2b50', color: '#f4edff', focusColor: '#ffffff' },
        formField: {
          background: '#0f0f16', borderColor: '#51465d', hoverBorderColor: '#8068a0',
          focusBorderColor: '#b99aff', color: '#f3edf8', placeholderColor: '#92899c',
        },
        content: { background: '#121119', borderColor: '#302a38', color: '#f3eff7' },
      },
    },
  },
})
