import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link href="/home">Home</Link>
    <Link href="/ML">ML</Link>
    <Link href="/hardware">Hardware</Link>
    <Link href="/login">Login</Link>
  </nav>
)
export default Navbar
