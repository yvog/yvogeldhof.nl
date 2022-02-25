import { ArrowBackIos } from '@mui/icons-material'
import { Button, Theme } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { ClassNames, useClasses } from '../../hooks/useClasses'

const backToPostsClasses = (theme: Theme): ClassNames => ({
  root: {
    margin: `${theme.spacing(2)} 0 0 0`,
  },
})

export const BackToPosts = () => {
  const classes = useClasses(backToPostsClasses)

  return (
    <Button color="primary" aria-label="Back to posts" href="/" css={classes.root}>
      <ArrowBackIos />
      Back to posts
    </Button>
  )
}
