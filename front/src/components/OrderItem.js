import React from 'react'
import { useDispatch } from 'react-redux'
import { REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART, INCREASE_STOCK, INCREASE_ALL_PRODUCT_STOCK } from '../redux/actions'

export default function OrderItem({ data }) {

    const dispatch = useDispatch()
    let { _id, name, price, quantity } = data


    return (
        <div className='box2'>
            <h4>{name}</h4>
            <h5>${price} x {quantity} = {(price * quantity).toFixed(2)}</h5>
            <button className='neu' onClick={() => {dispatch({ type: REMOVE_ONE_FROM_CART, payload: _id }); dispatch({type: INCREASE_STOCK, payload: _id})}}>Delete 1</button>        
            <button className='neu' onClick={() => {dispatch({ type: REMOVE_ALL_FROM_CART, payload: _id }); dispatch({type: INCREASE_ALL_PRODUCT_STOCK, payload: [{id:_id, quantity}]})}}>Delete all</button>
        </div>
    );
}
