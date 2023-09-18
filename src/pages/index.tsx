import { useState } from 'react'
import { Filters } from '../components/Filters/Filters'
import { PageLayout } from '../components/PageLayout/PageLayout'
import { PageMeta } from '../components/PageMeta/PageMeta'
import { PostItemList } from '../components/PostItemList/PostItemList'
import { FilterProvider } from '../context/FilterContext/FilterProvider'
import { Post } from '../types'
import { getAllPosts } from '../util/posts'

type PageProps = {
  posts: Post[]
}

export default function IndexPage(props: PageProps) {
  const { posts } = props
  const [shownPosts, setShownPosts] = useState<Post[]>(posts);

  return (
    <PageLayout>
      <FilterProvider>
        <PageMeta title="Blog" keywords={['overview', 'posts', 'blog']} />

        <Filters
          posts={posts}
          onPostsFiltered={(newFilteredPosts: Post[]) => setShownPosts(newFilteredPosts)}
        />

        <PostItemList posts={shownPosts} />
      </FilterProvider>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  posts.sort((postA, postB) =>
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
