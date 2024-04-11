import "@/styles/globals.css"
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
