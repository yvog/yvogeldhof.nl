import { Avatar, Link, Theme, Typography } from '@mui/material'
import { ClassNames, useClasses } from '../../hooks/useClasses'

const aboutMeClasses = (theme: Theme): ClassNames => ({
  root: {
    display: 'flex',
    columnGap: theme.spacing(2),
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  main: {
    margin: `0 0 ${theme.spacing(0.5)} 0`,
  },
  intro: {
    maxWidth: '75%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
    },
  },
})

export const AboutMe = () => {
  const classes = useClasses(aboutMeClasses)

  return (
    <div css={classes.root}>
      <Avatar alt="Yvo Geldhof" src="/images/author.jpg" css={classes.avatar} />
      <div>
        <Typography variant="body2" fontWeight="bold" css={classes.main}>
          Yvo Geldhof (Technical Front-end Developer @{' '}
          <Link href="https://macaw.nl" target="_blank" underline="hover">
            Macaw
          </Link>
          )
        </Typography>
        <Typography variant="body2" css={classes.intro}>
          writes about front-end development, game development and everything in between
          as long as it is about tech.
        </Typography>
      </div>
    </div>
  )
}
