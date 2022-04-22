import {addtoCart_value,decrement_value} from '../Types'
import axios  from 'axios'

export const addtoCart = (a)=>async(dispatch) => {

    console.log(a,localStorage.getItem('auth'))
    if(localStorage.getItem('auth')){
        let data= await axios.get(`http://localhost:5000/api/users/addToCart/?type=add&productId=${a}` ,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            }
        }) 
        
        console.log(data,'meeeeee')
        return dispatch({
            type: addtoCart_value,
            payload: {addcart:data.data}
        })
    }

   

 
    
}

