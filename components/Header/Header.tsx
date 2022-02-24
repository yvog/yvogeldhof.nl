import { Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { makeStyles } from 'tss-react/mui'
import { AboutMe } from '../AboutMe/AboutMe'
import { ColorModeToggle } from '../ColorModeToggle/ColorModeToggle'

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: `${theme.spacing(4)} 0 ${theme.spacing(4)} 0`,
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
  },
  logo: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
  },
}))

export const Header = () => {
  const { classes } = useStyles()

  return (
    <header className={classes.root}>
      <div className={classes.inner}>
        <Link href="/" passHref>
          <MuiLink
            variant="h1"
            underline="hover"
            color="primary"
            className={classes.logo}
          >
            <span>Yvo Geldhof&apos;s</span>
            <span>tech blog</span>
          </MuiLink>
        </Link>
        <ColorModeToggle />
      </div>
      <AboutMe />
    </header>
  )
}
