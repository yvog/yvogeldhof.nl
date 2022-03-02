import { Container, Divider, Typography } from '@mui/material'
import { useHydrate } from 'next-mdx/client'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { BackToPosts } from '../../components/BackToPosts/BackToPosts'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { MdxContent } from '../../components/MdxContent/MdxContent'
import { PageMeta } from '../../components/PageMeta/PageMeta'
import { Post } from '../../types'
import { createPostSneakPeek } from '../../util/createPostSneakPeek'

type PostPageProps = {
  post: Post
}

export default function PostPage({ post }: PostPageProps) {
  const content = useHydrate(post)
  const postTitle = post.frontMatter?.title
  const postSneakPeek = createPostSneakPeek(post?.content ?? '')

  return (
    <>
      <PageMeta
        title={postTitle ?? 'Post'}
        description={postSneakPeek}
        keywords={[...(postTitle?.split(' ') ?? []), 'posts']}
      />
      <Container maxWidth="md" component="article">
        <Header />
        <Divider />

        <BackToPosts />

        <MdxContent>
          <Typography variant="h2" component="h1">
            {postTitle}
          </Typography>
          {content}
        </MdxContent>

        <Divider />
        <Footer />
      </Container>
    </>
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
