import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Cart.css'; // Importing custom CSS file


const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`cart-container ${activeCart ? "active" : ""}`}
      >
        <div className="cart-header ">
          <span className="cart-title">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="close-icon "
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="empty-cart-message">
            Your cart is empty
          </h2>
        )}

        <div className="cart-footer">
          <h3 className="cart-summary">Items : {totalQty}</h3>
          <h3 className="cart-summary">Total Amount : {totalPrice}</h3>
          <hr className="divider" />
          <button
            onClick={() => navigate("/success")}
            className="checkout-btn"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`cart-icon ${totalQty > 0 ? "animate-bounce" : ""}`}
      />
    </>
  );
};

export default Cart;
