/// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism'
import { SerializeOptions } from 'next-mdx-remote/dist/types'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import { Post, PostMeta } from '../types'
import { createPathFromRoot, MdxFile, readFile, readFiles } from './files'

type MDXOptions = Pick<SerializeOptions, 'mdxOptions'>

const contentBasePath = 'src/content'
const postsContentDir = 'posts'
const postsDir = `${contentBasePath}/${postsContentDir}`

export async function getAllPosts(): Promise<Post[]> {
  const path = createPathFromRoot(postsDir)
  const files = await readFiles(path)
  const posts = Promise.all(
    files.map(async (file: MdxFile) => await transformFileToPost(file))
  )

  return posts
}

export async function getPost(url: string): Promise<Post | undefined> {
  const filename = `${url}.mdx`
  const path = createPathFromRoot(postsDir)
  const file = await readFile(path, filename)

  if (!file) {
    console.error('No file found')
    return
  }

  const options: MDXOptions = {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
      remarkPlugins: [remarkGfm],
    },
  }

  const post = await transformFileToPost(file, options)

  return post
}

export async function generatePostPaths<T>(): Promise<T[]> {
  const path = createPathFromRoot(postsDir)

  try {
    const files = await readFiles(path)

    return Promise.all(
      files.map((file: MdxFile) => ({
        params: {
          url: [createUrlKeyFromFilename(file.name)],
        },
      })) as unknown as T[]
    )
  } catch (error) {
    console.error('Could not generate paths', error)
  }

  return []
}

function createUrlKeyFromFilename(filename: string): string {
  return filename.substring(0, filename.length - 4)
}

async function transformFileToPost(
  file: MdxFile,
  mdxOptions?: MDXOptions
): Promise<Post> {
  const compiledSource = await serialize(file.contents, {
    parseFrontmatter: true,
    ...mdxOptions,
  })

  return {
    url: `/posts/${createUrlKeyFromFilename(file.name)}`,
    meta: compiledSource.frontmatter as unknown as PostMeta,
    compiled: compiledSource,
  }
}
