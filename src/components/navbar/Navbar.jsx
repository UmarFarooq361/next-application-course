import React from 'react'
import Links from "./links/Links"
import styles from "./navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
        <Link href="/" >
        <Image  src="/logo.png" alt="Logo" width={35} height={32} />
        </Link>
        </div>
        
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Navbar