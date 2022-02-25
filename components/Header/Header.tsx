import { Link as MuiLink, Theme } from '@mui/material'
import Link from 'next/link'
import { ClassNames, useClasses } from '../../hooks/useClasses'
import { AboutMe } from '../AboutMe/AboutMe'
import { ColorModeToggle } from '../ColorModeToggle/ColorModeToggle'

const headerClasses = (theme: Theme): ClassNames => ({
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
})

export const Header = () => {
  const classes = useClasses(headerClasses)

  return (
    <header css={classes.root}>
      <div css={classes.inner}>
        <Link href="/" passHref>
          <MuiLink variant="h1" underline="hover" color="primary" css={classes.logo}>
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
