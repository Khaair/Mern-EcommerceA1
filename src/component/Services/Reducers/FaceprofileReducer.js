import {faceProfile_value,decrement_value} from '../Types'

const initialstate = {
    count: 0,
    cart:4,
    profile:''
}

export default function(state = initialstate,action){

    switch(action.type){

        case faceProfile_value:
            return{
                ...state,
                cart: state.cart + action.payload.cart,
                profile:state.profile + action.payload.profile,
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
