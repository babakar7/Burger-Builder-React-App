import React from 'react'
import styles from './Toolbar.module.css'
import burgerLogo from '../../assets/burger-logo.png'

const toolbar = () => {

  return (
    <header className={styles.Toolbar}>

          <img src={burgerLogo} style={{height:'80%'}} />

        <nav>

          <ul style={{marginRight:'100px'}}>
            <li className={styles.NavItem}>
             <a href="/">  Burger Builder </a>
            </li>

            <li className={styles.NavItem}>

            <a href="/">  Checkout </a>
            
            </li>

          </ul>

        </nav>
    </header>
  )
}

export default toolbar
