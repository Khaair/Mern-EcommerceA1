import {newaddtoCart_value,decrement_value} from '../Types'

const initialstate = {
    count: 0,
    cart:[],
    profile:''
}

export default function(state = initialstate,action){

    switch(action.type){

        case newaddtoCart_value:
            return{
                ...state,
                cart: action.payload.addcart
            }
            case decrement_value:
                return{
                    ...state,
                    count: state.count - action.payload
                }
                default: 

                return state;

    }

}
