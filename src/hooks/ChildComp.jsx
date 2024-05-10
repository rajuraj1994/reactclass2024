import React,{memo} from 'react'

const ChildComp = ({data,test}) => {
    console.log('child component rendered')
  return (
    <>
    <h2 className='text-success'>Child Component {data}</h2>
    <button className='btn btn-danger' onClick={test}>click</button>
    </>
  )
}

export default memo(ChildComp)