'use client'
import { NavLinks } from '@/app/Constants/Constants'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

// Define the Nav Type
type NavType = {
  openNav: () => void
}

const Navbar = ({ openNav }: NavType) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setNavBg(true)
      } else {
        setNavBg(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`${
        navBg ? 'bg-slate-900' : 'fixed'
      } fixed h-[12vh] z-[10]  shadow-md w-full transition duration-200`}
    >
      <div className="flex items-center justify-between h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Link href="/">
          <h2 className="text-2xl font-bold text-white uppercase lg-[-1.5rem] sm:ml-0">
            Mahdi
          </h2>
        </Link>

        {/* Nav Start */}
        <div className="flex items-center space-x-10">
          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {NavLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.path}
                  className="text-white hover:text-blue-300"
                >
                  <p className="nav__link">{link.label}</p>
                </Link>
              )
            })}
          </div>
          {/* Nav End */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 py-3 px-8 btn__primary">
              Hire Me
            </button>
            {/* Hamburger */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
