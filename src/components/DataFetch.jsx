import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>setProduct(res.data))
        .catch(err=>console.log(err))
    })
  return (
    <>
    {products && products.map((item,i)=>(
        <div key={i}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>
    )) }

    </>
  )
}

export default DataFetch