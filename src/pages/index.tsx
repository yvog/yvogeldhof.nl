import { Container, Divider } from '@mui/material'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { PageMeta } from '../components/PageMeta/PageMeta'
import { PostItemList } from '../components/PostItemList/PostItemList'
import { Post } from '../types'
import { getAllPosts } from '../util/posts'

type PageProps = {
  posts: Post[]
}

export default function IndexPage(props: PageProps) {
  const { posts } = props

  return (
    <>
      <PageMeta title="Posts" keywords={['overview', 'posts']} />
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
  const posts = (await getAllPosts()).sort(
    (postA: Post, postB: Post) =>
      new Date(postB.meta?.date ?? '').getTime() -
      new Date(postA.meta?.date ?? '').getTime()
  )

  return {
    props: {
      posts,
    },
    revalidate: 60 * 10,
  }
}
