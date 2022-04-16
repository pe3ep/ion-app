import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../resources/logo.svg'

const Navigation = ({ children }) => {
  return (
    <>
      <div className="[ fixed z-50 top-0 left-0 h-screen w-[80px] py-8 ] [ flex flex-col gap-8 items-center ] [ bg-black/25 text-white ] ">
        <div className="flex flex-col items-center gap-4">
          <Image src={logo} width={30} height={30} alt="logo" />
          <h1 className="heading text-xs py-1 px-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-600">
            BETA
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/">
            <div className="transition-colors hover:bg-blue-600 bg-neutral-900 relative p-4 rounded-md cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-white h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <div className="transition-transform ease-in-out w-max | absolute top-[50%] left-20 translate-y-[-50%] | bg-black/75  py-2 px-4 rounded-md | origin-left scale-0 group-hover:scale-100">
                Игры
              </div>
            </div>
          </Link>
          <Link href="/beta">
            <div className="transition-colors hover:bg-blue-600 bg-neutral-900 relative p-4 rounded-md cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
              <div className="transition-transform ease-in-out w-max | absolute top-[50%] left-20 translate-y-[-50%] | bg-black/75  py-2 px-4 rounded-md | origin-left scale-0 group-hover:scale-100">
                О бете
              </div>
            </div>
          </Link>
        </div>
        <Link href="/settings">
          <div className="absolute bottom-0 mb-4 transition-colors hover:bg-blue-600 bg-neutral-900 p-4 rounded-md cursor-pointer group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" text-white h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="transition-transform ease-in-out w-max | absolute top-[50%] left-20 translate-y-[-50%] | bg-black/75 py-2 px-4 rounded-md | origin-left scale-0 group-hover:scale-100">
              Настройки
            </div>
          </div>
        </Link>
      </div>

      <section className="ml-[80px] p-8">{children}</section>
    </>
  )
}

export default Navigation
