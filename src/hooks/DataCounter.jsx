import React,{useReducer} from 'react'

//define the initial state 
const initialState={
    count:1
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count+1
            }
        case 'DECREMENT':
            return{
                count:state.count-1
            }
        default:
            return state
    }
}

const DataCounter = () => {
    // useReducer returns the current state and a dispatch function
    const[state,dispatch]=useReducer(reducer,initialState)

  return (
    <>
    <h2>{state.count}</h2>
    <button className='btn btn-primary' onClick={()=>dispatch({type:'INCREMENT'})}>Increase Counter</button>
    </>
  )
}

export default DataCounter