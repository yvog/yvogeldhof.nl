import Giscus from '@giscus/react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { GetStaticPropsContext } from 'next/types';
import { BackToPosts } from '../../components/BackToPosts/BackToPosts';
import { MdxContent } from '../../components/MdxContent/MdxContent';
import { PageLayout } from '../../components/PageLayout/PageLayout';
import { PageMeta } from '../../components/PageMeta/PageMeta';
import { useColorModeContext } from '../../context/ColorModeContext/useColorModeContext';
import { Post } from '../../types';
import { generatePostPaths, getPost } from '../../util/posts';

type PostPageProps = {
  post: Post;
};

type PostPageParams = {
  url: string;
};

export default function PostPage(props: PostPageProps) {
  const { post } = props;
  const postTitle = post.meta?.title ?? 'Post';
  const { mode } = useColorModeContext();

  return (
    // @ts-ignore
    <PageLayout component="article">
      <PageMeta
        title={postTitle ?? 'Post'}
        description={post.meta?.excerpt}
        keywords={[...(postTitle?.split(' ') ?? []), 'posts']}
      />

      <BackToPosts />

      <MdxContent
        source={post.compiled}
        title={post.meta?.title ?? ''}
        date={post.meta?.date ?? ''}
      />

      <Divider
        sx={{
          mt: 2,
        }}
      />

      <Box
        sx={{
          mt: 3.5,
          mb: 4,
        }}
      >
        <Giscus
          id="comments"
          repo="yvog/yvogeldhof.nl"
          repoId="MDEwOlJlcG9zaXRvcnkzNTUyODg4OTg="
          category="Comments"
          categoryId="DIC_kwDOFS1HQs4ChMzJ"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={mode === 'dark' ? 'transparent_dark' : 'light_protanopia'}
          lang="en"
          loading="lazy"
        />
      </Box>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const paths = await generatePostPaths<GetStaticPropsContext<PostPageParams>>();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<PostPageParams>) {
  const post = await getPost(params?.url ?? '');

  if (!post) {
    return {
      notFound: true,
    };
  }

  const tenMinutesInSeconds = 60 * 10;

  return {
    props: {
      post,
    },
    revalidate: tenMinutesInSeconds,
  };
}
