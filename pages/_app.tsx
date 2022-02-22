import type { AppProps } from 'next/app'
import { BlogThemeProvider } from '../components/Theme/BlogThemeProvider'
import { ColorModeContextProvider } from '../context/ColorModeContext/ColorModeContextProvider'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeContextProvider>
      <BlogThemeProvider>
        <Component {...pageProps} />
      </BlogThemeProvider>
    </ColorModeContextProvider>
  )
}
