import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/theory">Theory</Link>
      </menu>
    </nav>
  )
}

export default Navbar