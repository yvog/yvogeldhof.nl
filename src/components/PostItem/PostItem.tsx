import { Link as MuiLink, Theme, Typography } from '@mui/material'
import Link from 'next/link'
import { ClassNames, useClasses } from '../../hooks/useClasses'
import { Post } from '../../types'

type PostItemProps = Post

const postItemClasses = (theme: Theme): ClassNames => ({
  title: {
    display: 'block',
    margin: `${theme.spacing(1)} 0 ${theme.spacing(1)} 0`,
  },
})

export const PostItem = (props: PostItemProps) => {
  const { url, frontMatter, content } = props
  const classes = useClasses(postItemClasses)
  const sneakPeekMaxChars = 175

  return (
    <article>
      <Typography component="span" variant="caption">
        {frontMatter?.date}
      </Typography>
      <Link href={url ?? ''} passHref>
        <MuiLink underline="hover" variant="h2" css={classes.title}>
          {frontMatter?.title}
        </MuiLink>
      </Link>
      <Typography>
        {content?.substring(0, Math.min(content.length, sneakPeekMaxChars))}...
      </Typography>
    </article>
  )
}
