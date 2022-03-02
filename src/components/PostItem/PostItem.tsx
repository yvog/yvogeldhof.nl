import { Link as MuiLink, Theme, Typography } from '@mui/material'
import Link from 'next/link'
import { ClassNames, useClasses } from '../../hooks/useClasses'
import { Post } from '../../types'
import { createPostSneakPeek } from '../../util/createPostSneakPeek'

type PostItemProps = Post

const postItemClasses = (theme: Theme): ClassNames => ({
  title: {
    display: 'inline-block',
    margin: `${theme.spacing(1)} 0 ${theme.spacing(1)} 0`,
  },
})

export const PostItem = (props: PostItemProps) => {
  const { url, frontMatter, content } = props
  const classes = useClasses(postItemClasses)
  const postSneakPeek = createPostSneakPeek(content ?? '')

  return (
    <article>
      <Typography component="div" variant="caption">
        {frontMatter?.date}
      </Typography>
      <Link href={url ?? ''} passHref>
        <MuiLink underline="hover" variant="h2" css={classes.title}>
          {frontMatter?.title}
        </MuiLink>
      </Link>
      <Typography>{postSneakPeek}</Typography>
    </article>
  )
}
