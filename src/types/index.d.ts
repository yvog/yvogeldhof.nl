import { MdxNode } from 'next-mdx/server'

type Post = MdxNode<{
  title: string
  category?: string
  date?: string
}>
