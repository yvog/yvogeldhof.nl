import { Theme } from '@mui/material'
import { ClassNames, useClasses } from '../../hooks/useClasses'
import { Post } from '../../types'
import { PostItem } from '../PostItem/PostItem'

type PostItemListProps = {
  posts: Post[]
}

const postItemListClasses = (theme: Theme): ClassNames => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    margin: `${theme.spacing(4)} 0 ${theme.spacing(4)} 0`,
  },
})

export const PostItemList = (props: PostItemListProps) => {
  const { posts } = props
  const classes = useClasses(postItemListClasses)

  return (
    <section css={classes.root}>
      {posts.map((post: Post) => (
        <PostItem key={post.url} {...post} />
      ))}
    </section>
  )
}
