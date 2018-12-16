import React from 'react'

import styles from './BuildControls.module.css'

import BuildControl from './BuildControl'

const controls = [
  {label:'Salad', type:'salad'},
  {label:'Bacon', type:'bacon'},
  {label:'Cheese', type:'cheese'},
  {label:'Meat', type:'meat'},
]


const buildControls = (props) => {


  return (

      <div className={styles.BuildControls}>

      <p> Current Price: <strong> $ {props.price.toFixed(2)} </strong></p>

        {controls.map((ctr)=>{

          return <BuildControl

                    addIngredient={()=>{props.addIngredient(ctr.type)}}
                    removeIngredient={()=>{props.removeIngredient(ctr.type)}}
                    key={ctr.label}
                    label={ctr.label}
                    disabled={props.disabled[ctr.type]}

                    />

        })}

          <button className={styles.OrderButton}
                    disabled={!props.purchasable}
                    onClick={props.purchasing}
                     > ORDER NOW </button>


                     

      </div>
  )

}

export default buildControls
