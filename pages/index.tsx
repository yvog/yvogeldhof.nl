import { Button } from '@mui/material'
import { getAllNodes } from 'next-mdx/server'
import Link from 'next/link'
import { Post } from '../types'

type PageProps = {
  posts: Post[]
}

export default function IndexPage(props: PageProps) {
  const { posts } = props

  return (
    <div>
      <h1>Yvo Geldhof&apos;s tech blog</h1>
      <hr />
      {posts.map((post: Post) => (
        <div key={post.url}>
          <div>Date: {post.frontMatter?.date}</div>
          <div>Title: {post.frontMatter?.title}</div>
          <div>Excerpt: {post.frontMatter?.excerpt}</div>
          <Link href={post.url ?? '#'}>Read more</Link>
          <hr />
        </div>
      ))}
    </div>
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
