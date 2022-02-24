import { GitHub, LinkedIn } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`,
  },
}))

export const Footer = () => {
  const { classes } = useStyles()

  return (
    <footer className={classes.root}>
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
