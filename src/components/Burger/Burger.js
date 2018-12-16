import React from 'react'
import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients)
      .map((key)=>{
        return [...Array(props.ingredients[key])].map((_, index)=>{
          return  <BurgerIngredient key={key+index} type={key}/>
        })
      })
        .reduce((acc, el)=>{
          return acc.concat(el)
      })

      if(ingredients.length === 0 ) ingredients = <p> Please start adding ingredients </p>

  return (
    <div className={styles.Burger}>


    <BurgerIngredient type="bread-top"/>

      {ingredients}

      <BurgerIngredient type="bread-bottom"/>

    </div>
  )
}

export default burger
