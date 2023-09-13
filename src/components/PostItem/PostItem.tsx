import { Link as MuiLink, Theme, Typography } from '@mui/material'
import Link from 'next/link'
import { Post } from '../../types'
import { formatDateString } from '../../util/dates'

type PostItemProps = Post

export const PostItem = (props: PostItemProps) => {
  const { url, meta } = props

  return (
    <article>
      <Typography variant="caption" component="div">
        {formatDateString(meta?.date ?? '')}
      </Typography>

      <Link href={url ?? ''} passHref>
        <MuiLink underline="hover" variant="h3" sx={(theme: Theme) => ({
          display: 'inline-block',
          margin: `${theme.spacing(1)} 0 ${theme.spacing(1)} 0`,
        })}>
          {meta?.title}
        </MuiLink>
      </Link>
      <Typography>{meta?.excerpt}</Typography>
    </article>
  )
}
