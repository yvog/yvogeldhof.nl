import { PaletteMode, PaletteOptions } from '@mui/material'

const lightTheme: PaletteOptions = {
  background: {
    default: '#edf0f3c4',
  },
}

const darkTheme: PaletteOptions = {
  background: {
    default: '#001928',
  },
  text: {
    primary: 'rgba(213, 233, 255, 0.96)',
  },
}

const fontFamilyHeadings = "'Poppins', Segoe UI, Tahoma, sans-serif"
const fontFamilyBody = "'Source Sans Pro', Tahoma, sans-serif"

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightTheme : darkTheme),
  },
  typography: {
    fontFamily: fontFamilyHeadings,
    h1: {
      fontSize: 34,
      fontWeight: 500,
    },
    h2: {
      fontSize: 30,
      fontWeight: 500,
    },
    h3: {
      fontSize: 26,
      fontWeight: 500,
    },
    h4: {
      fontSize: 22,
      fontWeight: 500,
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
    },
    h6: {
      fontSize: 18,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1.7,
      fontFamily: fontFamilyBody,
    },
    body2: {
      fontSize: 14,
      fontWeight: 300,
      fontFamily: fontFamilyBody,
    },
    caption: {
      lineHeight: 1.7,
      ...{
        color: mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowY: 'scroll',
        },
      },
    },
  },
})
