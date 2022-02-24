import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Button, IconButton } from '@mui/material'
import { useColorModeContext } from '../../context/ColorModeContext/useColorModeContext'

export const ColorModeToggle = () => {
  const { mode, toggleColorMode } = useColorModeContext()
  const isDarkMode = mode === 'dark'
  const icon = isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />

  return (
    <Button onClick={toggleColorMode} aria-label="Adjust color mode">
      {icon}
    </Button>
  )
}
