import { GetStaticPropsContext } from 'next/types'
import { BackToPosts } from '../../components/BackToPosts/BackToPosts'
import { MdxContent } from '../../components/MdxContent/MdxContent'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import { Post } from '../../types'
import { generatePostPaths, getPost } from '../../util/posts'

type PostPageProps = {
  post: Post
}

type PostPageParams = {
  url: string
}

export default function PostPage(props: PostPageProps) {
  const { post } = props
  const postTitle = post.meta?.title ?? 'Post'

  return (
    // @ts-ignore
    <PageLayout component='article'>
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
    </PageLayout>
  )
}

export async function getStaticPaths() {
  const paths = await generatePostPaths<GetStaticPropsContext<PostPageParams>>()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<PostPageParams>) {
  const post = await getPost(params?.url ?? '')

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60 * 10,
  }
}
