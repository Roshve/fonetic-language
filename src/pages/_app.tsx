import type { AppProps } from 'next/app'
import { Nunito } from "@next/font/google";
import Default from '@/components/layouts/Default'
import Head from 'next/head'
import { SessionProvider as AuthProvider } from "next-auth/react";

import '@/static/styles/globals.css'

const nunito = Nunito({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${nunito.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Default>
        <Component {...pageProps} />
      </Default>
    </>
  )
}
/* <AuthProvider session={pageProps.session}>
        <Default>
          <Component {...pageProps} />
        </Default>
      </AuthProvider> */