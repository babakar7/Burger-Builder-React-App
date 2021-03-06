import * as actionTypes from './actions'

const initialState = {

  ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0
  },

  totalPrice:4,

}

const IngredientPrices = {

  salad:0.5,
  cheese:0.5,
  meat:1.5,
  bacon:0.7

}

const reducer = (state=initialState, action) => {


  switch(action.type){

    case actionTypes.ADD_INGREDIENT:


      return {
          ...state,
          ingredients:{
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1

          },
          totalPrice: state.totalPrice + IngredientPrices[action.ingredientName]
      }


    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients:{
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1

        },

        totalPrice: state.totalPrice - IngredientPrices[action.ingredientName]

      }

    default:
      return state
  }

    return state
}


export default reducer
