import { Divider, Typography } from '@mui/material'
import { ColorModeToggle } from '../ColorModeToggle/ColorModeToggle'

export const Header = () => {
  return (
    <header>
      <Typography variant="h1">Yvo Geldhof&apos;s tech blog</Typography>
      <ColorModeToggle />
      <Divider />
    </header>
  )
}
