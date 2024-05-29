import React, { useContext } from 'react';
import { CartItem } from './CartItem';
import { CartContext } from '../context/GlobalContext';

export const Cart = () => {
    // Use he cartcontext to get the current cart state
    const {cart} = useContext(CartContext);


    return(
        <>
        <h1>Shopping Cart</h1>
        
        <div className='cart'>
            {cart.length === 0 ? <p>The cart is empty</p> : cart.map(item => <CartItem key={item.id} item_from_cart={item}/> )}

        </div>

        <p className='total'>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)} </p>

        </>
    )
}