import {newaddtoCart_value,decrement_value} from '../Types'
import axios  from 'axios'

export default function NewAddtoCartAction() {


    return dispatch({
        type: newaddtoCart_value,
        payload: {addcart:data.data}
    })
}
