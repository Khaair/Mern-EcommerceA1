import {addtoCart_value,decrement_value} from '../Types'
import axios  from 'axios'

export const addtoCart = (a,b)=>async(dispatch) => {

    console.log(a,b,localStorage.getItem('auth'))
    if(localStorage.getItem('auth')){
        let data= await axios.get(`http://localhost:5000/api/users/addToCart`,{a,b} ,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            }
        })
            
        console.log(data)
        return dispatch({
            type: addtoCart_value,
            payload: {addcart:data.data}
        })
    }

   

 
    
}

export const decrement = (a) => {
    return{
        type: decrement_value,
        payload: a

    }
}