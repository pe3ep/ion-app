import Link from 'next/link'
import { motion } from 'framer-motion'

const FourOhFour = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}>
      <div className="text-white text-center mt-16">
        <h1 className="text-5xl font-Manrope font-extrabold mb-8">
          В работе приложения произошла ошибка.
        </h1>
        <p className="text-2xl font-Inter mb-8">
          Извините за неудобства. Код ошибки:{' '}
          <span className="font-black font-Manrope | bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
            404
          </span>
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <button className="button">Вернуться на главную</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default FourOhFour
