import { PaletteMode, useMediaQuery } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { ColorModeContext } from './useColorModeContext'

type ColorModeContextProviderProps = {
  children: React.ReactNode
}

const COLOR_MODE_PREFERENCE_KEY = 'yvogeldhof_nl_colormode_preference'

function getColorModePreference(): PaletteMode | null {
  try {
    const preference = window.localStorage.getItem(
      COLOR_MODE_PREFERENCE_KEY
    ) as PaletteMode

    return preference
  } catch (error) {
    console.error('Could not get color mode preference: ', error)
  }

  return null
}

function setColorModePreference(mode: PaletteMode): boolean {
  try {
    window.localStorage.setItem(COLOR_MODE_PREFERENCE_KEY, mode)
    return true
  } catch (error) {
    console.error('Could not set color mode preference: ', error)
  }

  return false
}

export const ColorModeContextProvider = (props: ColorModeContextProviderProps) => {
  const { children } = props
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState<PaletteMode | undefined>(undefined)

  useEffect(() => {
    if (mode != undefined) return

    const colorModePreference = getColorModePreference()
    const colorModeFallback = prefersDarkMode ? 'dark' : 'light'
    const defaultColorMode: PaletteMode = colorModePreference ?? colorModeFallback

    setMode(defaultColorMode)
  }, [mode, prefersDarkMode])

  const colorMode = useMemo(
    () => ({
      mode: mode ?? 'light',
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode | undefined) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light'
          setColorModePreference(newMode)
          return newMode
        })
      },
    }),
    [mode]
  )

  if (mode == undefined) return <></>

  return (
    <ColorModeContext.Provider value={colorMode}>{children}</ColorModeContext.Provider>
  )
}
