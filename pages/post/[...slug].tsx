import { Container, Divider, Typography } from '@mui/material'
import { useHydrate } from 'next-mdx/client'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Post } from '../../types'

type PostPageProps = {
  post: Post
}

export default function PostPage({ post }: PostPageProps) {
  const content = useHydrate(post)

  return (
    <Container maxWidth={'md'} component="article">
      <Header />
      <Typography variant="h1">{post.frontMatter?.title}</Typography>
      {content}
      <Footer />
    </Container>
  )
}

export async function getStaticPaths() {
  const paths = await getMdxPaths('post')

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const post = await getMdxNode<Post>('post', context)

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
