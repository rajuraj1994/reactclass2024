import React from 'react'
import Items from './Items'
import { useSelector } from 'react-redux'
import Student from './Student'
import StudentForm from './StudentForm'
import ShowProduct from './ShowProduct'
import SingleProduct from './SingleProduct'

const Nav = () => {
    const cartdata = useSelector(store => store.cart)
    return (
        <>
            <h1>The number of item in the cart is {cartdata.cartcount}</h1>
            <Items />
            <hr />
            <Student />
            <StudentForm />
            <ShowProduct/>
            <SingleProduct/>
        </>
    )
}

export default Nav