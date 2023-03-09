import React from 'react';
import { NavLink } from 'react-router-dom';
import cart1 from '../assets/icon_shopping_cart.svg'
import house from '../assets/house1.png'
import { useSelector } from 'react-redux';

export default function Navbar() {
    const cart = useSelector(state => state.cart)
    const sum = cart.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0)
    return (
        <div className='nav'>
            <div className='navbar-left'>
                <ul>
                    <li>
                        <NavLink className='links' to={'/'}>
                            <img src={house} alt="shopping cart" />
                            Home
                        </NavLink>
                    </li>

                </ul>
            </div>

            <div className='navbar-right'>
                <ul>
                    <li class="navbar-shopping-cart">
                        <NavLink className='links' to={'/cart'}>
                            Cart
                            <img src={cart1} alt="shopping cart" />
                            {cart.length > 0 ? <div>{sum}</div> : null}
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}
