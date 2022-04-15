import Head from 'next/head'
import Link from 'next/link'
import Gamecard from '../components/Gamecard'
import csgoImg from '../../resources/img/csgo/icon.png'
import craftImg from '../../resources/img/craft/icon.png'

function Home() {
  const games = [
    {
      name: 'Counter-strike',
      key: 'csgo',
      description: '5v5 tactical shooter',
      image: csgoImg,
    },
    {
      name: 'Minecraft',
      key: 'craft',
      description: 'open world survival game',
      image: craftImg,
    },
  ]

  return (
    <>
      <Head>
        <title>ION</title>
      </Head>
      <h1 className="text-white text-3xl font-Manrope font-extrabold mb-8">
        Игры
      </h1>
      <div className="grid_layout grid gap-8">
        {games.map((game) => (
          <Gamecard
            title={game.name}
            key={game.key}
            action={game.key}
            description={game.description}
            image={game.image}
          />
        ))}
      </div>

      <style jsx>{`
        .grid_layout {
          grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        }
      `}</style>
    </>
  )
}

export default Home
