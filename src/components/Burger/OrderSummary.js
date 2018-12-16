import React from 'react'


const orderSummary = (props)=>{

  const ingredientSummary = Object.keys(props.ingredients)
                                .map((key)=>{
                                 return  <li key={key}> <span style={{textTransform:'capitalize'}}>{key} </span>: {props.ingredients[key]} </li>
                                })

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

    <>
        <h3> Your order </h3>


        <p> Delicious Burger with the following ingredients: </p>

        <ul>
            {ingredientSummary}
        </ul>

        <p> <strong> Total Price= $ {props.totalPrice.toFixed(2)} </strong> </p>


        <p> Continue to Checkout? </p>

        <button style={btn} onClick={props.cancel}>  CANCEL </button>
        <button style= {btn} onClick={props.continue}> CONTINUE </button>
    </>

  )
}

export default orderSummary
