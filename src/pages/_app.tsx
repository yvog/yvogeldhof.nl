import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { BlogThemeProvider } from '../components/Theme/BlogThemeProvider'
import createEmotionCache from '../components/Theme/createEmotionCache'
import { ColorModeContextProvider } from '../context/ColorModeContext/ColorModeContextProvider'

// Client-side cache, shared for the whole session of the user in the browser.
const muiCache = createEmotionCache()

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = muiCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContextProvider>
        <BlogThemeProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </BlogThemeProvider>
      </ColorModeContextProvider>
    </CacheProvider>
  )
}
