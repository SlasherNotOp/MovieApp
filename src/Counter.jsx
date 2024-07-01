import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slice';

const Counter = () => {

    const dispact= useDispatch();

    const initialState=useSelector((state)=>{
        return state.babu;
    });

  return (
    <div>

    <button onClick={()=>{dispact(decrement())}} >-</button>
    <p>{initialState.counter}</p>
    <button onClick={()=>{dispact(increment())}}>+</button>
    </div>
  )
}

export default Counter
