import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import IconButton from "@mui/material/IconButton";
import { useColorModeContext } from '../../context/ColorModeContext/useColorModeContext'

export const ColorModeToggle = () => {
  const { mode, toggleColorMode } = useColorModeContext()
  const isDarkMode = mode === 'dark'
  const Icon = isDarkMode ? LightModeOutlinedIcon : DarkModeOutlinedIcon

  return (
    <IconButton aria-label="toggle color mode" onClick={toggleColorMode} color='primary' title='Toggle color mode'>
      <Icon fontSize='medium' />
    </IconButton>
  )
}
