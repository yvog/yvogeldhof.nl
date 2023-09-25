import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material";
import { Post } from '../../types'
import { formatDateString } from '../../util/dates'
import { RouteLink } from '../RouteLink/RouteLink'

type PostItemProps = Post

export const PostItem = (props: PostItemProps) => {
  const { url, meta } = props

  return (
    <article>
      <Typography variant="caption" component="div">
        {formatDateString(meta?.date ?? '')}
      </Typography>

      <RouteLink href={url ?? ''} variant="h3" sx={(theme: Theme) => ({
        display: 'inline-block',
        margin: `${theme.spacing(1)} 0 ${theme.spacing(1)} 0`,
      })} >
        {meta?.title}
      </RouteLink>

      <Typography>{meta?.excerpt}</Typography>
    </article>
  )
}
