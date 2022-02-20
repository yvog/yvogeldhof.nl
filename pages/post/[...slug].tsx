import { useHydrate } from 'next-mdx/client'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { Post } from '../../types'

export default function PostPage({ post }: any) {
  const content = useHydrate(post)

  return (
    <article>
      <h1>{post.frontMatter.title}</h1>
      {post.frontMatter.excerpt ? <p>{post.frontMatter.excerpt}</p> : null}
      <hr />
      {content}
    </article>
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
