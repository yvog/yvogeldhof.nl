import { makeStyles } from 'tss-react/mui'

type MdxContentProps = {
  children: React.ReactNode
}

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`,
  },
}))

export const MdxContent = (props: MdxContentProps) => {
  const { children } = props
  const { classes } = useStyles()

  return <div className={classes.root}>{children}</div>
}
