import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Nav from './redux/Nav'


const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layouts />}>
                    <Route index element={<HomePage />} />
                    <Route path='products' element={<Product />} />
                    <Route path='productdetails/:productId' element={<ProductDetails />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='register' element={<Register />} />
                    <Route path='redux/first' element={<Nav />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default MyRoute