import Head from 'next/head';

type PageMetaProps = {
  title: string;
  robots?: string;
  description?: string;
  keywords?: string[];
};

export const PageMeta = (props: PageMetaProps) => {
  const { title, robots, description, keywords } = props;
  const siteName = 'Yvo Geldhof';
  const pageTitle = `${title} - ${siteName}`;
  const pageKeywords = [
    'tech',
    'react',
    'JavaScript',
    'TypeScript',
    'front end',
    'front-end',
    'front',
    'end',
    'game',
    'development',
    'developer',
    'blog',
    'yvo',
    'geldhof',
    'personal',
    'website',
    ...(keywords ?? []),
  ].join(',');
  const descr =
    description ??
    'Yvo Geldhof writes about front-end development, game development and everything inbetween as long as it is about tech.';

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

        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={descr} />
        {/* <meta property="og:image" content="" /> */}
        <meta property="og:site_name" content={siteName} />
      </Head>
    </>
  );
};
