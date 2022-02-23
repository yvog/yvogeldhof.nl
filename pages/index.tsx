import { Container, Divider, Typography } from '@mui/material'
import { getAllNodes } from 'next-mdx/server'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { PostItemList } from '../components/PostItemList/PostItemList'
import { Post } from '../types'

type PageProps = {
  posts: Post[]
}

export default function IndexPage(props: PageProps) {
  const { posts } = props

  return (
    <Container maxWidth={'md'}>
      <Header />
      <PostItemList posts={posts} />
      <Footer />
    </Container>
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
