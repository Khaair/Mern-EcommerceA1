import {combineReducers} from 'redux'

import CounterReducer from './CounterReducer'
import FaceprofileReducer from './FaceprofileReducer'
import Login from './LoginReducer'
export default combineReducers({

    CounterReducer,
    FaceprofileReducer,
    Login
    

})