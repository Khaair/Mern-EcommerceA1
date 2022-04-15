import {faceProfile_value,decrement_value} from '../Types'
import axios  from 'axios'

export const faceProfile = async(a) => {

   let data= await axios.get(`http://localhost:5000/api/users/profile`, {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth')
      }
  })
  console.log(data.data.cart.length)
    return{
        type: faceProfile_value,
        payload: {cart:data.data.cart.length,profile:data.data}
    }
}

export const decrement = (a) => {
    return{
        type: decrement_value,
        payload: a

    }
}