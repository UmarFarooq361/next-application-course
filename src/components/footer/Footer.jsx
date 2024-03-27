import React from 'react'
import Styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.footerLogo}>Umar Dev</div>
      <div className={Styles.footerText}>Software Development Agency</div>
    </div>
  )
}

export default Footer