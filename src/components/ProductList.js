import React from "react";
import { Product } from "./Product";
import {Product_data} from "../data"

export const ProductList = () => {
    return (
        <div className="product-list">
            
            {/* Map through product_data array in the data.js and render a product component for each item */}
            {Product_data.map(item => ( <Product  key={item.id} product_item={item}   />))}
        </div>
    );
};
