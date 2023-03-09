import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { ADD_TO_CART, REDUCE_STOCK } from '../redux/actions';

export default function Product({ product }) {
    const dispatch = useDispatch()
    const sum = 'Out of stock'

    return (
        <div className='product-card'>
            <h3>{product.name}</h3>


            <span>{`Reviews: ${product.numReviews}`}</span>
            <div className='imageContainer'>
                <span className='imageRating'>{`✫ ${product.rating}`}</span>
                <Link to={`/api/products/${product._id}`}>
                    <img
                        src={`http://localhost:5000${product.image}`}
                        className="card-img"
                        alt={"name"}
                    />
                </Link>
            </div>

            {product.countInStock > 0
                ? <button className='neu' onClick={() => { dispatch({ type: ADD_TO_CART, payload: product._id }); dispatch({type: REDUCE_STOCK, payload: product._id}) }}>Add item to cart</button>
                : <div className='out-of-stock'>{sum}</div>}
        </div>
    )
}
