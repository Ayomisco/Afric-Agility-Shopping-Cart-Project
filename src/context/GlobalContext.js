// src/context/CartContext.js

import React, { createContext, useReducer } from 'react';

// Create a context for the cart state
export const CartContext = createContext();

// Define the cart reducer function
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if the item is already in the cart
            const itemInCart = state.find(item => item.id === action.payload.id);
            if (itemInCart) {
                // If the item is in the cart and the quantity is less than the stock, increase the quantity
                if (itemInCart && itemInCart.quantity < itemInCart.stock) {
                    return state.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                }else {
                // Alert if the item is out of stock
                    alert(`Cannot add more ${itemInCart.name}. Out of stock.`);
             
                    // If the item is already in the cart and the stock is 0, return the state unchanged
                    return state;

                }
            
            // If the item is not in the cart and the stock is greater than 0, add the item with quantity 1
            } else if (!itemInCart && action.payload.stock > 0) {
                return [...state, { ...action.payload, quantity: 1 }];
            }else {
                // Alert if the item is out of stock
                    alert(`Cannot add more ${itemInCart.name}. Out of stock.`);
             
                    // If the item is already in the cart and the stock is 0, return the state unchanged
                    return state;
            }
        
        case 'REMOVE_FROM_CART':
            // Remove the item from the cart based on its id
            return state.filter(item => item.id !== action.payload.id);

        case 'INCREMENT_QUANTITY':
            // Increment the quantity of the item if it's less than the stock
            return state.map(item =>
                item.id === action.payload.id && item.quantity < item.stock
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        case 'DECREMENT_QUANTITY':
            // Decrement the quantity of the item if it's greater than 1
            return state.map(item =>
                item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0);

        default:
            // Return the state unchanged for unrecognized action types
            return state;
    }
};

// Create a provider component to wrap around parts of the app
export const CartProvider = ({ children }) => {
    // Initialize the cart state with useReducer
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        // Provide the cart state and dispatch function to the component tree
        <CartContext.Provider value={{ cart, dispatch }}>
            {children} {/* Render children components within the provider */}
        </CartContext.Provider>
    );
};
