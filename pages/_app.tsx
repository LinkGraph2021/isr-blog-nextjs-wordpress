import { AppProps } from 'next/app'
import '../styles/index.css'
import Image from 'next/image';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
