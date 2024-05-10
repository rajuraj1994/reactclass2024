import React,{useState} from 'react'

const IncrementDecrement = () => {
    const[num,setNum]=useState(1)

    // const increase=()=>(
    //     setNum(num+1)
    // )
  return (
    <>
    <h2>{num}</h2>
    {/* <button className='btn btn-primary' onClick={increase}>Add</button> */}
    <button className='btn btn-primary' onClick={()=>setNum(num+1)}>Add</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    { num>1 && 
     <button className='btn btn-danger' onClick={()=>setNum(num-1)}>Decrease</button>
    }
   
    </>
  )
}

export default IncrementDecrement