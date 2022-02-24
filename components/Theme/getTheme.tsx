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
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 36,
    },
    h3: {
      fontSize: 24,
    },
    body1: {
      letterSpacing: '0.06em',
    },
    body2: {
      letterSpacing: '0.06em',
    },
  },
})
