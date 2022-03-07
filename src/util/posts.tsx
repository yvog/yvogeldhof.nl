/// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism'
import * as fs from 'fs/promises'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { Post, PostMeta } from '../types'

export async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts')
  const filenames = await fs.readdir(postsDirectory)

  return Promise.all(
    filenames.map(async (filename: string) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      const compiledSource = await serialize(fileContents, { parseFrontmatter: true })

      return {
        url: `/posts/${filename.substring(0, filename.length - 4)}`,
        meta: compiledSource.frontmatter,
        compiled: compiledSource,
      }
    }) as unknown as Post[]
  )
}

export async function getPost(url: string): Promise<Post | undefined> {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts')
  const fileName = `${url}.mdx`
  const filePath = path.join(postsDirectory, fileName)
  const fileContents = await fs.readFile(filePath, 'utf8')
  const compiledSource = await serialize(fileContents, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  })

  return {
    url: `/posts/${fileName.substring(0, fileName.length - 4)}`,
    meta: compiledSource.frontmatter as unknown as PostMeta,
    compiled: compiledSource,
  }
}

export async function getPostsPaths(): Promise<any[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts')
  const filenames = await fs.readdir(postsDirectory)

  return Promise.all(
    filenames.map(async (filename: string) => ({
      params: {
        url: [filename.substring(0, filename.length - 4)],
      },
    })) as unknown as any[]
  )
}
