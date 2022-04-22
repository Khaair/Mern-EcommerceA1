import {login} from '../Types'


export const LoginAction = () =>async(dispatch)=> {
    console.log("me");
    return dispatch({
        type: login,
        payload:true
    })
}

