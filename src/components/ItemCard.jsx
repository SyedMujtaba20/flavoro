import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";
import './ItemCard.css'; // Importing custom CSS file

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="item-card">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className="item-card-delete"
      />
      <img src={img} alt={name} className="item-card-img" />
      <div className="item-card-info">
        <h2 className="item-card-name">{name}</h2>
        <div className="item-card-price-quantity">
          <span className="item-card-price">Rs. {price}</span>
          <div className="item-card-quantity">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="item-card-quantity-btn"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="item-card-quantity-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
