import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal'
import OrderSummary from '../../components/Burger/OrderSummary'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions'



class BurgerBuilder extends Component  {

  state = {

  //  ingredients:{
  //    salad:0,
  //    bacon:0,
  //    cheese:0,
  //    meat:0
  //  },

  //  totalPrice:4,

  //  purchasable:false,

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


    let queryParams = []

    for (let key in this.state.ingredients){

      queryParams.push(encodeURIComponent(key) + '=' +
        encodeURIComponent(this.state.ingredients[key]))

    }

    let queryString = queryParams.join('&')

      this.props.history.push({pathname:'/checkout', search: '?' + queryString})

  }


  updatePurchasable (){

      let ingredients = {...this.props.ingredients}

      let sum = Object.keys(ingredients)
                    .map((key)=>{
                      return ingredients[key]
                    })
                    .reduce((acc, curr)=>{
                     return  acc + curr
                    })


      return sum > 0

  }

  /*addIngredient = (type) =>{

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



  }*/
  render(){

    let disabledInfo = {...this.props.ingredients}

    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
        <>

          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >

            <OrderSummary ingredients={this.props.ingredients} continue={this.continuePurchaseHandler}
                      cancel={this.purchaseCancelHandler} totalPrice={this.props.totalPrice}/>

          </Modal>

          <Burger ingredients={this.props.ingredients}/>

          <BuildControls
            addIngredient={this.props.onIngAdded}
            removeIngredient={this.props.onIngRemoved}
            price={this.props.totalPrice}
            disabled={disabledInfo}
            purchasing={this.purchaseHandler}
            purchasable={this.updatePurchasable()}
          />

        </>
    )
  }

}

const mapStateToProps = state => {
    return{
      ingredients:state.ingredients,
      totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return{
      onIngAdded: (ingName) => {dispatch({type:actionTypes.ADD_INGREDIENT, ingredientName:ingName})},
      onIngRemoved: (ingName) => {dispatch({type:actionTypes.REMOVE_INGREDIENT, ingredientName:ingName})}

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)
