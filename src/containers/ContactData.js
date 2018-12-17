import React, {Component} from 'react'
import styles from './ContactData.module.css'


class ContactData extends Component {

  state = {
      name:'',
      email:'',
      address:{
        street:'',
        postcode:''
      }

  }

  render(){

    return (
      <div className={styles.ContactData}>

          <h4> Please Enter your Contact Info </h4>

          <form>

          <input type="text" name="name" placeholder="Name"/>

          <input type="text" name="email" placeholder="Email"/>

          <input type="text" name="street" placeholder="Street"/>

          <input type="text" name="postcode" placeholder="Postal Code"/>


            <button  style={{backgroundColor:'green', color:'white'}}> ORDER </button>



          </form>

      </div>
    )
  }

}

export default ContactData
