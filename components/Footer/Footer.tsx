import { GitHub, LinkedIn } from '@mui/icons-material'
import { IconButton, Theme, Typography } from '@mui/material'
import { ClassNames, useClasses } from '../../hooks/useClasses'

const footerClasses = (theme: Theme): ClassNames => ({
  root: {
    margin: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`,
  },
})

export const Footer = () => {
  const classes = useClasses(footerClasses)

  return (
    <footer css={classes.root}>
      <Typography variant="caption">
        &copy; Copyright {new Date().getFullYear()} - Yvo Geldhof, all rights reserved.
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
    </footer>
  )
}
