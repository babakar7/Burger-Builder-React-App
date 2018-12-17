import React from 'react'
import styles from './Toolbar.module.css'
import burgerLogo from '../../assets/burger-logo.png'
import {NavLink} from 'react-router-dom'

const toolbar = () => {

  return (
    <header className={styles.Toolbar}>

          <img src={burgerLogo} style={{height:'80%'}} />

        <nav>

          <ul style={{marginRight:'100px'}}>
            <li className={styles.NavItem}>

             <NavLink to="/">BurgerBuilder</NavLink>

            </li>

          

          </ul>

        </nav>
    </header>
  )
}

export default toolbar
