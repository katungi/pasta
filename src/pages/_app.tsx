import "@/styles/globals.css"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
