import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, addToCart } from '../redux/actions'
import Product from './Product'

export default function Home() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        if(products.length === 0) {
            dispatch(getAllProducts())
        }
        
    }, [dispatch, products.length])

    if (products.length) {
        return (
            <div className='cards-container'>
                {products.map(product => <Product key={product._id} product={product}
                    addToCart={() => dispatch(addToCart(product.id))}
                />)}
            </div>
        )
    } else {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

}
