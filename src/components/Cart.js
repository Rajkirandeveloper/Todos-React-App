import React from "react";
import { useState } from "react";
import CartList from "./CartList";
import "./Cart.css";

const Cart = () => {
  const [cartItem, setCartItem] = useState("");
  const [list, setList] = useState([]);

  const changeHandler = (e) => {
    setCartItem(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newCart = [...list, cartItem];
    setList(newCart);
    console.log(newCart);
    setCartItem("");
  };
  const removeHandler = (indexValue) => {
    const newCart = list.filter((cart, index) => index !== indexValue);
    setList(newCart);
    console.log(newCart);
  };

  return (
    <div>
      <center>
        <div className="section">
          <h1 className="heading">My Cart</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="task"
              onChange={changeHandler}
              value={cartItem}
            />{" "}
            <br />
            <button type="submit" className="btn__add">
              Add
            </button>
          </form>
        </div>

        {<CartList ourCart={list} removeHandler={removeHandler}></CartList>}
      </center>
    </div>
  );
};

export default Cart;
