import * as fs from 'fs/promises'
import path from 'path'

export type MdxFile = {
  name: string
  contents: string
}

export function createPathFromRoot(dirName: string): string {
  return path.join(process.cwd(), dirName)
}

export async function readFiles(dirPath: string): Promise<MdxFile[]> {
  try {
    const filenames = await fs.readdir(dirPath)

    return Promise.all(
      filenames.map(async (filename: string) => ({
        name: filename,
        contents: await fs.readFile(path.join(dirPath, filename), 'utf8'),
      }))
    )
  } catch (error) {
    console.error(`Could not read directory "${dirPath}"`, error)
  }

  return []
}

export async function readFile(
  path: string,
  filename: string
): Promise<MdxFile | undefined> {
  const filePath = `${path}/${filename}`

  try {
    return {
      name: filename,
      contents: await fs.readFile(filePath, 'utf8'),
    }
  } catch (error) {
    console.error(`Could not read file "${filePath}"`, error)
  }

  return
}
