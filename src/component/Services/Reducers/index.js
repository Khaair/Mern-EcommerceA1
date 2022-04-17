import {combineReducers} from 'redux'

import CounterReducer from './CounterReducer'
import FaceprofileReducer from './FaceprofileReducer'
import Login from './LoginReducer'
import AddtoCartReducer from './AddtoCartReducer'

export default combineReducers({

    CounterReducer,
    FaceprofileReducer,
    Login,
    AddtoCartReducer
    

})