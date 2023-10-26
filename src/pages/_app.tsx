import '@/styles/globals.css'
import { ScopedCssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScopedCssBaseline enableColorScheme={false} sx={{backgroundColor: "unset", userSelect: "none"}}>
      <Component {...pageProps} />
    </ScopedCssBaseline>
  )
}
