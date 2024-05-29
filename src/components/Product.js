import React, { useContext } from 'react'
import { CartContext } from '../context/GlobalContext';

export const Product = ({product_item}) => {
    
    const {dispatch} = useContext(CartContext);


    // Function to handle adding a product to the cart
    const addToCart = () => {
        dispatch ({type: 'ADD_TO_CART', payload : product_item})
    }

    return (

        <div className='product'>
            
            <div className='details'>
                <h3> {product_item.name} </h3>
                <p>{product_item.description}</p>
                <p> ${product_item.price} </p>
                <p>Stock: {product_item.stock} </p>
                <button onClick={addToCart}>Add To Cart</button>

            </div>

        </div>
        
    );
};