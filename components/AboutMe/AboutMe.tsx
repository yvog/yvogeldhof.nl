import { Avatar, Link, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
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
}))

export const AboutMe = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <Avatar alt="Yvo Geldhof" src="/images/author.jpg" className={classes.avatar} />
      <div>
        <Typography variant="body2" fontWeight="bold" className={classes.main}>
          Yvo Geldhof (Technical Front-end Developer @{' '}
          <Link href="https://macaw.nl" target="_blank" underline="hover">
            Macaw
          </Link>
          )
        </Typography>
        <Typography variant="body2" className={classes.intro}>
          writes about front-end development, game development and everything inbetween
          as long as it is about tech.
        </Typography>
      </div>
    </div>
  )
}
