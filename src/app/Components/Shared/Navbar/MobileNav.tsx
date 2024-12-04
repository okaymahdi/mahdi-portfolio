import { NavLinks } from '@/app/Constants/Constants'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

// Define Nav type
type NavType = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ showNav, closeNav }: NavType) => {
  const openNav = showNav ? 'translate-x-0' : ' -translate-x-full'
  return (
    <div>
      {/* Overly */}
      <div
        className={`fixed ${openNav} transform transition-all duration-500 ease-in-out z-[100] bg-black/70 opacity-70 w-full h-screen`}
      ></div>

      {/* Nav Links */}
      <div
        className={`${openNav} transform transition-all duration-500 delay-300 ease-in-out text-white fixed flex flex-col  justify-center w-[80%] sm:w-[60%] h-screen bg-[#0f0715] p-4 space-y-6 z-[1006] lg:hidden`}
      >
        {/* Nav Links */}

        {NavLinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.path}
              className="text-white hover:text-blue-300"
            >
              <p className="nav__link text-xl ml-12 border-b-[1.5px] border-white pb-2 sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          )
        })}

        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="sm:w-8 w-6 sm:h-8 h-6 text-white absolute top-[0.7rem] right-[1.4rem] cursor-pointer"
        />
      </div>
    </div>
  )
}

export default MobileNav
