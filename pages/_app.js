import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  // global.backendUrl = 'https://antsprotocolapi.unialsolutions.com'
  global.backendUrl = 'http://localhost:3000'
  return <Component {...pageProps} />
}
