import { Theme, Typography } from '@mui/material'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { ClassNames, useClasses } from '../../hooks/useClasses'
import { PublishedOn } from '../PublishedOn/PublishedOn'
import { MdxContentComponents } from './MdxContentComponents'

type MdxContentProps = {
  title: string
  date: string
  source: MDXRemoteSerializeResult
}

const mdxContentClasses = (theme: Theme): ClassNames => ({
  root: {
    margin: `${theme.spacing(2)} 0 ${theme.spacing(1)} 0`,
    wordBreak: 'break-word',
    overflow: 'hidden',
  },
})

export const MdxContent = (props: MdxContentProps) => {
  const { source, title, date } = props
  const classes = useClasses(mdxContentClasses)

  return (
    <div css={classes.root}>
      <PublishedOn date={date} />
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <MDXRemote {...source} components={MdxContentComponents} />
    </div>
  )
}
