import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CLEAR_CART } from '../redux/actions'
import OrderItem from './OrderItem'
import cart1 from '../assets/icon_shopping_cart.svg'

export default function MyOrder() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <div className='contain-cart'>
      <div className='title-cart'>
        <img src={cart1} alt="shopping cart" />
        <h1>Cart</h1>
        <button className='neu' onClick={() => dispatch({ type: CLEAR_CART })}>Empty cart</button>
      </div>
      {cart.map((item, index) => <OrderItem key={index} data={item} />)}
    </div>
  );
}

