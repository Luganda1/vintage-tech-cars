import React from "react";
import {CartContext} from "../../context/cart";
import {BsChevronDoubleDown, BsChevronDoubleUp} from "react-icons/bs"

export default function CartItem({id, image, price, title, amount}) {
  
  const {
    removeItem,
    increaseAmount,
    decreaseAmount,
    } = React.useContext(CartContext);
  
  return (
    <article className="cart-item">
      <img src={image} alt={title}/>
      <div>
        <h4>{title}</h4>
        <h3>{price}</h3>
        <button type="button" 
        className="remove-btn cart-btn" 
        onClick={() => {
          removeItem(id);
        }}
        >Remove</button>
      </div>
      <div >
        <button type="button"
            className="cart-btn amount-btn"
            onClick={() => {
              // console.log("item increased")
              increaseAmount(id)
            }}><BsChevronDoubleUp/></button>

            <p>{amount}</p>

        <button type="button"
            className="cart-btn amount-btn"
            onClick={() => {
              // console.log("item decresed")
              decreaseAmount(id, amount);
              }}><BsChevronDoubleDown /></button>
      </div>
    </article>
  )
}
