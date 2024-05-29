import React , {useContext} from "react";
import { CartContext } from "../context/GlobalContext";

export const CartItem = ({item_from_cart}) => {

    const {dispatch} = useContext(CartContext);


    // function to increment item quantity
    const incrementQuantity = () => {
        dispatch({type : 'INCREMENT_QUANTITY', payload : item_from_cart})
    }

     // function to increment item quantity
    const decrementQuantity = () => {
        dispatch({type : 'DECREMENT_QUANTITY', payload : item_from_cart})
    }

     // function to Remove item from cart
    const removeFromCart = () => {
        dispatch({type : 'REMOVE_FROM_CART', payload : item_from_cart})
    }



    return (


        <div className="cart-item">
            <img src="{item_from_cart.image}" alt="{item_from_cart.name}" />
            <div className="details">
                <h3>{item_from_cart.name}</h3>
                <p>Price: ${item_from_cart.price}</p>
                <p>
                Quantity: 
                <button className="qtn-btn" onClick={decrementQuantity}>-</button>
                {item_from_cart.quantity}
                <button className="qtn-btn" onClick={incrementQuantity}>+</button>
                <button className="qtn-btn" onClick={removeFromCart}>Romove</button>

                </p>


            </div>
            
        </div>
    )
}