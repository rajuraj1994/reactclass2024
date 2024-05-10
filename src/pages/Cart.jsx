import React, { useState, useEffect, Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { FaTrash } from "react-icons/fa6";

const Cart = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cartItems'))
        setProduct(cartData)
    }, [])
    //increase quantity 
    const increaseQty = id => {
        const updateCarts = products.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item
        })
        setProduct(updateCarts)
        localStorage.setItem('cartItems', JSON.stringify(updateCarts))
    }
    //decrease quantity 
    const decreaseQty = id => {
        const updateCarts = products.map((item) => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })
        setProduct(updateCarts)
        localStorage.setItem('cartItems', JSON.stringify(updateCarts))
    }

    //remove from the cart 
    const removeCartHandler = id => {
        const confirmed = window.confirm('Are you sure want to delete this item from the cart?')
        if (confirmed) {
            const filterCart = products.filter(item => item.id !== id)
            setProduct(filterCart)
            localStorage.setItem('cartItems', JSON.stringify(filterCart))
            toast.success('product is removed from the cart')
        }
    }
    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <ToastContainer theme='colored' position='top-center' />

            <div className="container">
                <div className="row d-flex justify-content-between my-5">
                    {products.length === 0 ? (
                        <h2 className='text-center text-danger mt-5'>
                            Your Cart is Empty
                        </h2>
                    ) : (
                        <>
                            <h2 className='text-center'>
                                Your Cart Items
                            </h2>
                            <div className="col-md-8 shadow">
                                {products && products.map((item, i) => (
                                    <Fragment key={i}>
                                        <hr />
                                        <div className="row d-flex align-items-center">
                                            <div className="col-2">
                                                <img src={item.image} alt={item.title} width={'50'} />
                                            </div>
                                            <div className="col-3">
                                                <strong>{item.title}</strong>
                                            </div>
                                            <div className="col-2 text-warning">
                                                ${item.price}
                                            </div>
                                            <div className="col-3">
                                                <div className="d-flex">
                                                    <button className='btn btn-danger' onClick={() => decreaseQty(item.id)}>-</button>
                                                    &nbsp;
                                                    <input type="number" value={item.quantity} readOnly
                                                        className='form-control text-center border-0' />
                                                    &nbsp;
                                                    <button className='btn btn-primary' onClick={() => increaseQty(item.id)}>+</button>
                                                </div>
                                            </div>
                                            <div className="col-1">
                                                <button className='btn btn-danger'
                                                    onClick={() => removeCartHandler(item.id)}>
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                        <hr />
                                    </Fragment>
                                ))}
                            </div>
                            <div className="col-md-3">
                                <div className="shadow p-2">
                                    <h5>Cart Summary</h5>
                                    <hr />
                                    <p><strong>Units:</strong>
                                        {products.reduce((ac, item) => ac + Number(item.quantity), 0)}
                                    </p>
                                    <p><strong>Total:</strong>${products.reduce((ac, item) => ac + item.quantity * item.price, 0)}</p>
                                    <hr />
                                    <button className='btn btn-warning'>Check Out</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </>
    )
}

export default Cart