import React, { useState } from "react";
// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Product card
const Product = ({ product, onAddToCart }) => {
  const { name, price } = product;
  return (
    <div className="text-center w-80 h-80 m-2 p-4 rounded-lg shadow-md border">
      <h2 className="font-semibold">{name}</h2>
      <p>Price: {price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="px-4 py-2 font-medium mt-5 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

// Cart card
const CartItem = ({ item }) => {
  const { product, quantity } = item;
  return (
    <div className="w-80 h-40 border shadow-md rounded-lg m-2 p-4">
      <h2 className="font-semibold">{product.name}</h2>
      <p className="font-semibold">Quantity: {quantity}</p>
      <p className="font-semibold text-green-400">
        Price: {quantity * product.price}
      </p>
    </div>
  );
};

export const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // if the product already in cart increase the quantity else add into cart
    const exist = cart.find((item) => item.product.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };
  return (
    <div className="p-1">
      <h2 className="font-bold text-center text-3xl my-3">Products </h2>
      <div className="flex">
        {products.map((product) => (
          <Product product={product} key={product.id} onAddToCart={addToCart} />
        ))}
      </div>
      {/* show cart Items */}
      <div className="mt-5">
        <h2 className="font-bold text-center text-3xl my-3">Cart </h2>
        <div className="flex">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
      </div>
      <p className="font-bold text-xl my-3 text-green-600">
        Total Amount :{" "}
        {cart.reduce((a, c) => {
          const { product, quantity } = c;
          return a + quantity * product.price;
        }, 0)}{" "}
        {"Rs"}
      </p>
    </div>
  );
};
