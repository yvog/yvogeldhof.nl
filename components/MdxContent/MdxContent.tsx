import { Theme } from '@mui/material'
import { ClassNames, useClasses } from '../../hooks/useClasses'

type MdxContentProps = {
  children: React.ReactNode
}

const mdxContentClasses = (theme: Theme): ClassNames => ({
  root: {
    margin: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`,
  },
})

export const MdxContent = (props: MdxContentProps) => {
  const { children } = props
  const classes = useClasses(mdxContentClasses)

  return <div css={classes.root}>{children}</div>
}
