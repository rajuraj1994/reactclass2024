import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

const StudentForm = () => {

    const[name,setName]=useState('')
    const dispatch=useDispatch()

    const change=()=>(
        dispatch({type:'CHANGE_NAME',payload:name})
    )

  return (
    <>
    <div className="container">
        <div className="col-md-6 shadow p-3">
            <h2 className='text-muted text-center my-3'>
                <input type="text" placeholder='type your name' className='form-control' onChange={(e)=>setName(e.target.value)} />

                <button className='btn btn-primary' onClick={change}>Submit</button>
            </h2>
        </div>
    </div>
    </>
  )
}

export default StudentForm