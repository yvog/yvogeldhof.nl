import { PaletteMode } from '@mui/material'
import { amber, deepOrange, grey } from '@mui/material/colors'

const lightTheme = {
  // palette values for light mode
  primary: amber,
  divider: amber[200],
  text: {
    primary: grey[900],
    secondary: grey[800],
  },
}

const darkTheme = {
  // palette values for dark mode
  primary: deepOrange,
  divider: deepOrange[700],
  background: {
    default: deepOrange[900],
    paper: deepOrange[900],
  },
  text: {
    primary: '#fff',
    secondary: grey[500],
  },
}

export const getBlogTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightTheme : darkTheme),
  },
})
