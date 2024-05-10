import React,{useContext} from 'react'
import { GlobalContext } from './GlobalValue'

const ComD = () => {
    const data=useContext(GlobalContext)
  return (
    <>
    <h1>Student name is {data.fname} {data.lname}</h1>
    <h1>
        The language we are learning is {data.subject}
    </h1>
    </>
  )
}

export default ComD