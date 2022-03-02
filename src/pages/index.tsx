import { Container, Divider } from '@mui/material'
import { getAllNodes } from 'next-mdx/server'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { PageMeta } from '../components/PageMeta/PageMeta'
import { PostItemList } from '../components/PostItemList/PostItemList'
import { Post } from '../types'

type PageProps = {
  posts: Post[]
}

export default function IndexPage(props: PageProps) {
  const { posts } = props

  return (
    <>
      <PageMeta
        title="Posts"
        description="Yvo Geldhof writes about front-end development, game development and everything inbetween as long as it is about tech."
        keywords={['overview', 'posts']}
      />
      <Container maxWidth="md">
        <Header />
        <Divider />
        <PostItemList posts={posts} />
        <Divider />
        <Footer />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllNodes<Post>('post')

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
    },
  }
}
