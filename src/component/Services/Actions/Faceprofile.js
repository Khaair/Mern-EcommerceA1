import {faceProfile_value,decrement_value,addtoCart_value} from '../Types'
import axios  from 'axios'

export const faceProfile = () =>async(dispatch) => {

   let data= await axios.get(`http://localhost:5000/api/users/profile`, {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth')
      }
  })
  console.log(data.data,'lool')
   if(data.data){
    // return dispatch({
    //     type: faceProfile_value,
    //     payload: {profile:data.data}
    // })

    return dispatch({
        type: addtoCart_value,
        payload: {addcart:data.data.cart}
    })
   }
}

export const decrement = (a) => {
    return{
        type: decrement_value,
        payload: a

    }
}