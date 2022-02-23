import { Divider, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <footer>
      <Divider />
      <Typography variant="body1">
        &copy; Copyright {new Date().getFullYear()} - Yvo Geldhof, all rights reserved.
      </Typography>
    </footer>
  )
}
