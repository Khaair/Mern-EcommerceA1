import {login} from '../Types'

const initialstate = {
    login: false
}

export default function(state = initialstate,action){

    switch(action.type){

        case login:
            return{
                ...state,
                login: true
            }
          
                default: 

                return state;

    }

}
