'use client'
import React from 'react'
import MobileNav from './MobileNav'
import Navbar from './Navbar'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = React.useState(false)
  const showNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)
  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav
