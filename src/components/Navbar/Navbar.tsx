import React from 'react'
import Link from 'next/link'
import styles from '@/components/Navbar/Navbar.module.css';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Theory',
    href: '/theory',
  },
];

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <menu className={styles['nav-router']}>
          {links.map(({ name, href }) => (
            <Link href={href}>{name}</Link>
          ))}
        </menu>
      </nav>
    </header>
  )
}

export default Navbar