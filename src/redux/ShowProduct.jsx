import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from './actions/productAction'
import Card from '../components/Card'

const ShowProduct = () => {
    const dispatch = useDispatch()
    const product_data = useSelector(store => store.productsData)
    const products = product_data.products

    useEffect(() => {
        try {
            dispatch(fetchProducts())
        }
        catch (err) {
            console.log('error while fetching the data')
        }
    }, [dispatch])

    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products && products.map((item, i) => (
                        <Card key={i} data={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShowProduct