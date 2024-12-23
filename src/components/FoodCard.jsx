import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import './FoodCard.css'; // Importing custom CSS file

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="food-card">
      <img
        src={img}
        alt={name}
        className="food-card-img"
      />
      <div className="food-card-header">
        <h2>{name}</h2>
        <span className="food-card-price">Rs. {price}</span>
      </div>
      <p className="food-card-desc">{desc.slice(0, 50)}...</p>
      <div className="food-card-footer">
        <span className="food-card-rating">
          <AiFillStar className="food-card-star" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="food-card-button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
