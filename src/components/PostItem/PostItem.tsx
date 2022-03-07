import { Link as MuiLink, Theme, Typography } from '@mui/material'
import Link from 'next/link'
import { ClassNames, useClasses } from '../../hooks/useClasses'
import { Post } from '../../types'

type PostItemProps = Post

const postItemClasses = (theme: Theme): ClassNames => ({
  title: {
    display: 'inline-block',
    margin: `${theme.spacing(1)} 0 ${theme.spacing(1)} 0`,
  },
})

export const PostItem = (props: PostItemProps) => {
  const { url, meta } = props
  const classes = useClasses(postItemClasses)

  return (
    <article>
      <Typography component="div" variant="caption">
        {meta?.date}
      </Typography>
      <Link href={url ?? ''} passHref>
        <MuiLink underline="hover" variant="h2" css={classes.title}>
          {meta?.title}
        </MuiLink>
      </Link>
      <Typography>{meta?.excerpt}</Typography>
    </article>
  )
}
