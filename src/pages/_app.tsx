import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const hoge = "j"
  return <Component {...pageProps} />
}
export default MyApp
