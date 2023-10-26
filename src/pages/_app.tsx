import '@/styles/globals.css'
import { ScopedCssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Deeej Portfolio</title>
      </Head>
      <ScopedCssBaseline enableColorScheme={false} sx={{ backgroundColor: "unset", userSelect: "none" }}>
        <Component {...pageProps} />
      </ScopedCssBaseline>
    </>
  )
}
