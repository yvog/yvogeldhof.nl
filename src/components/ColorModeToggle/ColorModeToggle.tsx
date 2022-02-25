import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Button, Theme } from '@mui/material'
import { useColorModeContext } from '../../context/ColorModeContext/useColorModeContext'
import { ClassNames, useClasses } from '../../hooks/useClasses'

const headerClasses = (theme: Theme): ClassNames => ({
  root: {
    minWidth: 'unset',
    borderRadius: '100%',
    height: 48,
    width: 48,
  },
})

export const ColorModeToggle = () => {
  const { mode, toggleColorMode } = useColorModeContext()
  const classes = useClasses(headerClasses)
  const isDarkMode = mode === 'dark'
  const icon = isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />

  return (
    <Button onClick={toggleColorMode} aria-label="Adjust color mode" css={classes.root}>
      {icon}
    </Button>
  )
}
