import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'
import Card from '../components/Card'

const Product = () => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
                setProduct(response.data)
                setLoading(false)
            }
            catch (err) {
                console.log(err)
            }
        }

        setTimeout(() => {
            fetchData()
        }, 2000)
    }, [])
    return (
        <>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                </div>
            ) : (
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {products && products.slice(0, 8).map((item,i) => (
                            <Card data={item} key={i} />
                        ))}

                    </div>
                </div>
            )}

        </>
    )
}

export default Product