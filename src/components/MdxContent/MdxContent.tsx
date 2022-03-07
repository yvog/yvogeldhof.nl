/* eslint-disable @next/next/no-css-tags */

import { Theme, Typography } from '@mui/material'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Head from 'next/head'
import { ClassNames, useClasses } from '../../hooks/useClasses'
import { MdxContentComponents } from './MdxContentComponents'

type MdxContentProps = {
  title: string
  source: MDXRemoteSerializeResult
}

const mdxContentClasses = (theme: Theme): ClassNames => ({
  root: {
    margin: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`,
    wordBreak: 'break-word',
    overflow: 'hidden',
  },
})

export const MdxContent = (props: MdxContentProps) => {
  const { source, title } = props
  const classes = useClasses(mdxContentClasses)

  return (
    <div css={classes.root}>
      <Head>
        <link rel="stylesheet" href="/styles/prism-oceanic.css" />
      </Head>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <MDXRemote {...source} components={MdxContentComponents} />
    </div>
  )
}
