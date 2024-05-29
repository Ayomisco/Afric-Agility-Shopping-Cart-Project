import React, {createContext, useReducer} from 'react';
import { Product_data } from '../data';

// Create a context for the cart
export const CartContext = createContext();

// Reducer function to handle cart state changes of the product
const CartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TO_CART': // Action to add to cart
            if (action.payload.stock > 0){
                return [...state, {...action.payload, quantity : 1 }]; 
            }else{
                alert('Out Of Stock!');
            };


        
        case 'REMOVE_FROM_CART': // Action to remove a product from cart
            return state.filter(item => item.id !== action.payload.id);


        case 'INCREMENT_QUANTITY':// Action to Increment a product Quantitty in cart
            return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1 }: item)

        case 'DECREMENT_QUANTITY':// Action to DECREMENT a product Quantitty in cart
            return state.map(item => 
                item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item
            ).filter(item => item.quantity > 0);
        
        case 'SET_CART': 
            return action.payload;

        default:
            return state;

    };
};


export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, []);

    return(
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}