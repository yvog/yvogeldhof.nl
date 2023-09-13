import { GitHub, LinkedIn } from '@mui/icons-material'
import { Box, IconButton, Theme, Typography } from '@mui/material'

export const Footer = () =>
  <Box component='footer' sx={(theme: Theme) => ({
    margin: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`,
  })}>
    <Typography variant="body2" component="span">
      &copy; {new Date().getFullYear()}, all rights reserved.
    </Typography>

    <IconButton
      color="primary"
      href="https://nl.linkedin.com/in/yvo-geldhof"
      target="_blank"
    >
      <LinkedIn />
    </IconButton>
    <IconButton color="primary" href="https://github.com/yvog" target="_blank">
      <GitHub />
    </IconButton>
  </Box>
