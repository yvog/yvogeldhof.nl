import { PaletteMode } from '@mui/material'
import { createContext, useContext } from 'react'

type ColorModeContextValues = {
  mode: PaletteMode
  toggleColorMode: () => void
}

export const ColorModeContext = createContext<ColorModeContextValues>({
  mode: 'dark',
  toggleColorMode: () => {},
})

export const useColorModeContext = () => useContext(ColorModeContext)
