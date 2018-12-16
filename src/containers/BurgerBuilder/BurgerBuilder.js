import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal'
import OrderSummary from '../../components/Burger/OrderSummary'


const IngredientPrices = {

  salad:0.5,
  cheese:0.5,
  meat:1.5,
  bacon:0.7
}

class BurgerBuilder extends Component  {

  state = {

    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },

    totalPrice:4,

    purchasable:false,

    purchasing: false

  }

// arrow function otherwise this will refer to the button when
//method is triggered through an event
  purchaseHandler = () => {

    this.setState({purchasing:true})

  }

  purchaseCancelHandler = () => {

    this.setState({purchasing:false})
  }

  continuePurchaseHandler = ()=>{

    alert('continue')
  }

  updatePurchasable (){

      let ingredients = {...this.state.ingredients}

      let sum = Object.keys(ingredients)
                    .map((key)=>{
                      return ingredients[key]
                    })
                    .reduce((acc, curr)=>{
                     return  acc + curr
                    })


      if(sum>0){
        this.setState({purchasable:true})
      } else {
        this.setState({purchasable:false})

      }

  }

  addIngredient = (type) =>{

    let oldCount = this.state.ingredients[type]
    let newCount = oldCount + 1
    let updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = newCount

    let priceToAdd = IngredientPrices[type]
    let oldPrice = this.state.totalPrice
    let newPrice = oldPrice + priceToAdd

    this.setState({ingredients:updatedIngredients, totalPrice:newPrice}, () => {
      this.updatePurchasable()
    })


  }

  removeIngredient = (type) =>{



      let oldCount = this.state.ingredients[type]

      if (oldCount === 0)  return

      let newCount = oldCount - 1

      let updatedIngredients = {...this.state.ingredients}
      updatedIngredients[type] = newCount


      let priceToRemove = IngredientPrices[type]

      let oldPrice = this.state.totalPrice
      let newPrice = oldPrice - priceToRemove

      this.setState({ingredients:updatedIngredients, totalPrice:newPrice}, ()=>{
        this.updatePurchasable()
      })



  }
  render(){

    let disabledInfo = {...this.state.ingredients}

    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
        <>

          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >

            <OrderSummary ingredients={this.state.ingredients} continue={this.continuePurchaseHandler}
                      cancel={this.purchaseCancelHandler} totalPrice={this.state.totalPrice}/>

          </Modal>

          <Burger ingredients={this.state.ingredients}/>

          <BuildControls
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient}
            price={this.state.totalPrice}
            disabled={disabledInfo}
            purchasing={this.purchaseHandler}
            purchasable={this.state.purchasable}
          />

        </>
    )
  }

}

export default BurgerBuilder
