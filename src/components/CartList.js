import React from "react";
import "./Cart.css";

const CartList = ({ ourCart, removeHandler }) => {
  return (
    <div>
      <h2>
        Cart (<span className="total">{ourCart.length}</span>)
      </h2>
      <div>
        {ourCart.map((cart, index) => (
          <div key={index} className="todo__item">
            <h2>
              {cart}{" "}
              <button
                className="btn__remove"
                onClick={() => removeHandler(index)}
              >
                Remove
              </button>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
