import React from 'react'
import Burger from '../components/Burger/Burger'
import styles from './CheckoutSummary.module.css'

const CheckoutSummary = (props) => {


  const btn = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    font: 'inherit',
    padding: '10px',
    margin: '10px',
    fontWeight: 'bold'
  }


  return (
      <div className={styles.CheckoutSummary}>



        <div style={{width:'100%', margin:'auto', fontWeight:'bold', marginBottom:'10px'}}> CHECKOUT </div>

        <Burger ingredients={props.ingredients}/>

        <button style={btn} onClick={props.cancel}>  CANCEL </button>

        <button style= {btn} onClick={props.continue}> CONTINUE </button>

      </div>
  )
}

export default CheckoutSummary
