import { makeStyles } from 'tss-react/mui'
import { Post } from '../../types'
import { PostItem } from '../PostItem/PostItem'

type PostItemListProps = {
  posts: Post[]
}

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    margin: `${theme.spacing(4)} 0 ${theme.spacing(4)} 0`,
  },
}))

export const PostItemList = (props: PostItemListProps) => {
  const { posts } = props
  const { classes } = useStyles()

  return (
    <section className={classes.root}>
      {posts.map((post: Post) => (
        <PostItem key={post.url} {...post} />
      ))}
    </section>
  )
}
