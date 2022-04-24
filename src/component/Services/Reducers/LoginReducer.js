import {login} from '../Types'

const initialstate = {
    login: false
}

export default function(state = initialstate,action){
// console.log('looo')
    switch(action.type){

        case login:
            return{
                ...state,
                login: action.payload
            }
          
                default: 

                return state;

    }

}
