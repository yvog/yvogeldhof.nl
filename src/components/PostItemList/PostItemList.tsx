import Box from '@mui/material/Box';
import { Theme } from '@mui/material';
import { Post } from '../../types';
import { PostItem } from '../PostItem/PostItem';

type PostItemListProps = {
  posts: Post[];
};

export const PostItemList = (props: PostItemListProps) => {
  const { posts } = props;

  return (
    <Box
      component="section"
      sx={(theme: Theme) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4),
        margin: `${theme.spacing(4)} 0 ${theme.spacing(4)} 0`,
      })}
    >
      {posts.length === 0 && <div>No posts were found.</div>}
      {posts.map((post: Post) => (
        <PostItem key={post.url} {...post} />
      ))}
    </Box>
  );
};
