import { PaletteMode, PaletteOptions } from '@mui/material'

const lightTheme: PaletteOptions = {
  //
}

const darkTheme: PaletteOptions = {
  //
}

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightTheme : darkTheme),
  },
  typography: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
    h1: {
      fontSize: 40,
      fontWeight: 500,
    },
    h2: {
      fontSize: 34,
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
      fontWeight: 350,
      lineHeight: 1.82,
    },
    body2: {
      fontSize: 14,
      fontWeight: 350,
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
