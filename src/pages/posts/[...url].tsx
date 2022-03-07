import { Container, Divider } from '@mui/material'
import { GetStaticPropsContext } from 'next/types'
import { BackToPosts } from '../../components/BackToPosts/BackToPosts'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { MdxContent } from '../../components/MdxContent/MdxContent'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import { Post } from '../../types'
import { getPost, getPostsPaths } from '../../util/posts'

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
    <>
      <PageMeta
        title={postTitle ?? 'Post'}
        description={post.meta?.excerpt}
        keywords={[...(postTitle?.split(' ') ?? []), 'posts']}
      />
      <Container maxWidth="md" component="article">
        <Header />
        <BackToPosts />
        <Divider />
        <MdxContent source={post.compiled} title={post.meta?.title ?? ''} />
        <Divider />
        <Footer />
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getPostsPaths()

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
  }
}
