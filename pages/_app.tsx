import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { BlogThemeProvider } from '../components/Theme/BlogThemeProvider'
import { ColorModeContextProvider } from '../context/ColorModeContext/ColorModeContextProvider'

const muiCache = createCache({
  key: 'mui',
  prepend: true,
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={muiCache}>
      <ColorModeContextProvider>
        <BlogThemeProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </BlogThemeProvider>
      </ColorModeContextProvider>
    </CacheProvider>
  )
}
