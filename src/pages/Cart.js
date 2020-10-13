import React from "react";
import {CartContext} from "../context/cart"
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";
import {Link} from "react-router-dom";
// import {userContext} from "../context/user"


export default function Cart() {
  const user = false;
  const {total, cart} = React.useContext(CartContext);

  if(cart.length === 0) {
    return <EmptyCart />
  }

  return (
    <section className="cart-items section">
      <h2>Akagaliko / your cart</h2>
      {cart.map(item => {
        return <CartItem key={item.id} {...item} />
      })}

        <h2>Total : ${total}</h2>
        {
          user?
        <Link to="/checkout" className="btn btn-primary btn-block">Checkout/ sasula</Link>
        :<Link to="/login" className="btn btn-primary btn-block">Login</Link>
        }

    </section>
  )
}



