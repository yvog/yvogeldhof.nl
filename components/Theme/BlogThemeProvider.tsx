import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Box, createTheme, IconButton, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { useColorModeContext } from '../../context/ColorModeContext/useColorModeContext'
import { getBlogTheme } from './getBlogTheme'

type BlogThemeProviderProps = {
  children: React.ReactNode
}

export const BlogThemeProvider = (props: BlogThemeProviderProps) => {
  const { children } = props
  const { mode, toggleColorMode } = useColorModeContext()
  const theme = useMemo(() => createTheme(getBlogTheme(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <>
        {mode} mode
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {children}
      </>
    </ThemeProvider>
  )
}
