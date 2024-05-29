# Stylish Product List with Cart

This is a simple React project that displays a product list and a shopping cart on the same page. It uses React for the UI components and basic HTML/CSS for styling.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [CSS](#css)
- [License](#license)

## Project Overview

This project demonstrates a stylish product list with a shopping cart interface. Each product card includes a thumbnail, description, price, stock information, and an "Add to Cart" button. The shopping cart allows incrementing and decrementing the quantity of items and removing items from the cart.

## Features

- Display a list of products with thumbnails, descriptions, prices, and stock information.
- Add products to the shopping cart.
- Increment and decrement product quantities in the cart.
- Remove products from the cart.
- Responsive and colorful UI.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Ayomisco/Afric-Agility-Shopping-Cart-Project.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Afric-Agility-Shopping-Cart-Project
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. You should see a list of products and a shopping cart interface.

## CSS

The CSS styling for this project is included in the `main.css` file. Below is the complete CSS code:

```css
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #ece9e6, #ffffff);
    color: #333;
    margin: 0;
    padding: 0;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 10px;
}

h1 {
    color: #333;
    text-align: center;
    margin-bottom: 40px;
    font-size: 2em;
    font-weight: bold;
}

.product-list, .cart {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.product, .cart-item {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    width: calc(30% - 20px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.product:hover, .cart-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.product img, .cart-item img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
}

.product .details, .cart-item .details {
    text-align: center;
}

.product .details p, .cart-item .details p {
    margin: 10px 0;
    color: #555;
}

button {
    background: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
    margin-top: 10px;
}

button:hover {
    background: #0056b3;
    transform: scale(1.05);
}

.qty-btn {
    background: #6c757d;
    margin: 0 5px;
}

.qty-btn:hover {
    background: #5a6268;
}

.remove-btn {
    background: #dc3545;
    margin-top: 15px;
}

.remove-btn:hover {
    background: #c82333;
}

.cart-total {
    width: 100%;
    text-align: right;
    font-size: 1.5em;
    margin-top: 20px;
    color: #007BFF;
}

.product:nth-child(1) .details h3,
.product:nth-child(1) button {
    background: #FF5733;
}

.product:nth-child(2) .details h3,
.product:nth-child(2) button {
    background: #33C4FF;
}

.product:nth-child(3) .details h3,
.product:nth-child(3) button {
    background: #FFC133;
}

.product:nth-child(4) .details h3,
.product:nth-child(4) button {
    background: #9B59B6;
}

.product:nth-child(5) .details h3,
.product:nth-child(5) button {
    background: #28A745;
}

.product:nth-child(6) .details h3,
.product:nth-child(6) button {
    background: #E74C3C;
}
```