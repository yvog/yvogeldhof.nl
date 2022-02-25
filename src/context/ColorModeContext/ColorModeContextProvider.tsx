import { PaletteMode, useMediaQuery } from '@mui/material'
import { useMemo, useState } from 'react'
import { ColorModeContext } from './useColorModeContext'

type ColorModeContextProviderProps = {
  children: React.ReactNode
}

export const ColorModeContextProvider = (props: ColorModeContextProviderProps) => {
  const { children } = props
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const defaultColorMode: PaletteMode = 'dark' // todo: preference from localstorage ?? 'dark'
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : defaultColorMode
  )

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>{children}</ColorModeContext.Provider>
  )
}
