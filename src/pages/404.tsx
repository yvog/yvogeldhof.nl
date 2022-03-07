import { Container, Divider } from '@mui/material'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { NotFound } from '../components/NotFound/NotFound'
import { PageMeta } from '../components/PageMeta/PageMeta'
import { getAllPosts } from '../util/posts'

export default function NotFoundPage() {
  return (
    <>
      <PageMeta title="404 - Not Found" robots="nofollow, noindex" />
      <Container maxWidth="md">
        <Header />
        <Divider />
        <NotFound />
        <Divider />
        <Footer />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
