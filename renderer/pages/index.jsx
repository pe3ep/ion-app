import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Head>
        <title>ION</title>
      </Head>
      <h1 className="text-white text-3xl font-Manrope font-extrabold mb-8">
        Игры
      </h1>
      <div className="grid_layout grid gap-8"></div>

      <style jsx>{`
        .grid_layout {
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        }
      `}</style>
    </>
  )
}

export default Home
