import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from '../Services/Actions/CounterAction'

const CounterTwo = () => {

    const count = useSelector( state => state.CounterReducer.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={() => dispatch(increment(2))}>Increment</button>
            <button onClick={() => dispatch(decrement(3))}>Decrement</button>
        </div>
    )
}


export default CounterTwo