import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import  {BrowserRouter} from 'react-router-dom'
import Checkout from './containers/Checkout'
import {Route} from 'react-router-dom'
import ContactData from './containers/ContactData'


class App extends Component {
  render() {
    return (
      <div>

      <BrowserRouter>
          <>

      <Layout>



            <Route path="/" exact  component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path = '/contact-data' component = {ContactData} />




      </Layout>
      
      </>


      </BrowserRouter>


      </div>
    );
  }
}

export default App;
