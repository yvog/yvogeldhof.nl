import { Theme, Typography } from '@mui/material'
import { ClassNames, useClasses } from '../../hooks/useClasses'
import { BackToPosts } from '../BackToPosts/BackToPosts'

const notFoundClasses = (theme: Theme): ClassNames => ({
  root: {
    margin: `${theme.spacing(4)} 0 ${theme.spacing(4)} 0`,
  },
  button: {
    margin: `0 0 ${theme.spacing(4)} 0`,
  },
})

export const NotFound = () => {
  const classes = useClasses(notFoundClasses)

  return (
    <>
      <Typography variant="h2" component="h2" css={classes.root}>
        Page not found
      </Typography>
      <BackToPosts css={classes.button} />
    </>
  )
}
