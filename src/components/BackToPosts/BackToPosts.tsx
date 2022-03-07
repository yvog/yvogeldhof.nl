import { ArrowBackIos } from '@mui/icons-material'
import { Button, ButtonProps, Theme } from '@mui/material'
import { ClassNames, useClasses } from '../../hooks/useClasses'

const backToPostsClasses = (theme: Theme): ClassNames => ({
  root: {
    margin: `0 0 ${theme.spacing(2)} 0`,
  },
})

type BackToPostsProps = Pick<ButtonProps, 'className'>

export const BackToPosts = (props: BackToPostsProps) => {
  const { className } = props
  const classes = useClasses(backToPostsClasses)

  return (
    <Button
      color="primary"
      aria-label="Back to posts"
      href="/"
      css={classes.root}
      className={className}
    >
      <ArrowBackIos />
      Back to posts
    </Button>
  )
}
