import { ArrowBackIos } from '@mui/icons-material'
import { Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: `${theme.spacing(2)} 0 0 0`,
  },
}))

export const BackToPosts = () => {
  const { classes } = useStyles()

  return (
    <Button
      color="primary"
      aria-label="Back to posts"
      href="/"
      className={classes.root}
    >
      <ArrowBackIos />
      Back to posts
    </Button>
  )
}
