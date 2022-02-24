import { Link as MuiLink, Typography } from '@mui/material'
import Link from 'next/link'
import { makeStyles } from 'tss-react/mui'
import { Post } from '../../types'

type PostItemProps = Post

const useStyles = makeStyles()((theme) => ({
  title: {
    display: 'block',
    margin: `${theme.spacing(1)} 0 ${theme.spacing(1)} 0`,
  },
}))

export const PostItem = (props: PostItemProps) => {
  const { url, frontMatter, content } = props
  const { classes } = useStyles()
  const sneakPeekMaxChars = 175

  return (
    <article>
      <Typography component="span" variant="caption">
        {frontMatter?.date}
      </Typography>
      <Link href={url ?? ''} passHref>
        <MuiLink underline="hover" variant="h2" className={classes.title}>
          {frontMatter?.title}
        </MuiLink>
      </Link>
      <Typography>
        {content?.substring(0, Math.min(content.length, sneakPeekMaxChars))}...
      </Typography>
    </article>
  )
}
