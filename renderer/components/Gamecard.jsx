import Link from 'next/link'
import Image from 'next/image'

const Gamecard = (props) => {
  return (
    <>
      <Link href={`/games/${props.action}`}>
        <div className="transition-colors p-6 bg-neutral-800 hover:bg-blue-600 rounded-lg select-none h-44 flex flex-col text-white overflow-hidden shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="drop-shadow-lg rounded-md overflow-hidden ">
              <div className="h-12 w-12">
                <Image src={props.image} layout="fill" />
              </div>
            </div>
            <h1 className="font-Manrope font-extrabold text-xl">
              {props.title}
            </h1>
          </div>
          <div className="">
            <p className="font-Inter text-gray-300">{props.description}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Gamecard
