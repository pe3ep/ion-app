import Navigation from '../components/layout/Navigation'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import ProgressBar from '@badrap/bar-of-progress'
import { useEffect } from 'react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const progress = new ProgressBar({
    size: 4,
    color: '#2563EB',
    className: 'z-[9999]',
    delay: 100,
  })

  useEffect(() => {
    router.events.on('routeChangeStart', progress.start)
    router.events.on('routeChangeComplete', progress.finish)
    router.events.on('routeChangeError', progress.finish)

    return () => {
      router.events.off('routeChangeStart', progress.start)
      router.events.off('routeChangeComplete', progress.finish)
      router.events.off('routeChangeError', progress.finish)
    }
  }, [router])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Manrope:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
                delay: 0.2,
              },
            }}
            exit={{
              opacity: 0,
              y: 30,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            }}>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Navigation>
    </>
  )
}

export default MyApp
