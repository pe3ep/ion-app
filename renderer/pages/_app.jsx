import Navigation from '../components/layout/Navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </>
  )
}

export default MyApp
