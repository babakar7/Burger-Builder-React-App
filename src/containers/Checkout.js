import React, {Component} from 'react'
import CheckoutSummary from './CheckoutSummary'



class Checkout extends Component{

  state= {

    ingredients:{
      salad:1,
      cheese:1,
      meat:1,
      cheese:1,
      bacon:1

    }
  }

  componentDidMount () {

    let query = new URLSearchParams(this.props.location.search)
    let ingredients  = {}

    for( let param of query.entries()){
      ingredients[param[0]] = +param[1]

    }

    this.setState({ingredients:ingredients})

  }

  checkoutCancel = () => {

      this.props.history.goBack()

  }

  checkoutContinue = () => {

    this.props.history.replace('/contact-data')

  }


  render(){

    return(

        <div>

          <CheckoutSummary

              ingredients={this.state.ingredients}
              cancel={this.checkoutCancel}
              continue={this.checkoutContinue}

            />

        </div>
    )
  }
}

export default Checkout
