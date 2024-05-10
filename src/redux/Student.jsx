import React from 'react'
import { useSelector } from 'react-redux'

const Student = () => {
    const name=useSelector(store=>store.student)
  return (
    <>
    <h1>The name of the student is {name.student_name}</h1>
    </>
  )
}

export default Student