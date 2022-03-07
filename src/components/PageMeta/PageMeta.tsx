import Head from 'next/head'
import { useRouter } from 'next/router'

type PageMetaProps = {
  title: string
  robots: string
  description?: string
  keywords?: string[]
}

export const PageMeta = (props: PageMetaProps) => {
  const { title, robots, description, keywords } = props

  const router = useRouter()
  const siteName = "Yvo Geldhof's tech blog"
  const pageTitle = `${title} - ${siteName}`
  const pageUrl = router.asPath
  const pageKeywords = [
    'tech',
    'react',
    'JavaScript',
    'front-end',
    'game',
    'development',
    'developer',
    'blog',
    'sharepoint',
    'macaw',
    'yvo',
    'geldhof',
    ...(keywords ?? []),
  ].join(',')
  const pageCanonical = `https://yvogeldhof.nl${pageUrl}`
  const descr =
    description ??
    'Yvo Geldhof writes about front-end development, game development and everything inbetween as long as it is about tech.'

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content={robots ?? 'index, follow'} />
        <title>{pageTitle}</title>
        <meta name="description" content={descr}></meta>
        {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
        <meta name="keywords" content={pageKeywords} />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content="Yvo Geldhof" />
        <meta name="web_author" content="Yvo Geldhof" />
        <meta name="HandheldFriendly" content="true" />
        <link rel="canonical" href={pageCanonical} />

        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={descr} />
        {/* <meta property="og:image" content="" /> */}
        <meta property="og:url" content={pageCanonical} />
        <meta property="og:site_name" content={siteName} />
      </Head>
    </>
  )
}
