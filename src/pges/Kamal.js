import React from 'react'
import {useReducer} from 'react'

const counterReducer =(state, action)=> {
    switch(action.type){
        case 'INCREAMENT':
            return {count: state.count + 1};
        case 'DECREAMENT':
            return{count : state.count-1};
            default:
                return state;
    }
}
export default function Kamal() {
    const[state, dispatch]= useReducer(counterReducer,{count:0});
  return (
    <div>
        <p>
            count:{state.count}
        </p>
        <button onClick={() => dispatch({type: 'INCREAMENT'})}>Add</button>
        <button onClick={() => dispatch({type: 'DECREAMENT'})}>Sub</button>
    </div>
  )
}
