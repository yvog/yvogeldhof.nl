import { MDXRemoteSerializeResult } from 'next-mdx-remote'

type PostMeta = {
  title: string
  excerpt: string
  category: string[]
  date: string
}

type Post = {
  url: string
  meta: PostMeta | undefined
  compiled: MDXRemoteSerializeResult
}
