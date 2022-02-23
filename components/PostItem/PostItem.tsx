import { Button, Link, Typography } from '@mui/material'
import { Post } from '../../types'

type PostItemProps = Post

export const PostItem = (props: PostItemProps) => {
  const { url, frontMatter, content } = props
  const sneakPeekMaxChars = 175

  return (
    <article>
      <Typography component="span" variant="caption">
        {frontMatter?.date}
      </Typography>
      <Link href={url}>
        <Typography variant="h2">{frontMatter?.title}</Typography>
      </Link>
      <Typography>
        {content?.substring(0, Math.min(content.length, sneakPeekMaxChars))}...
      </Typography>
    </article>
  )
}
