import React from "react";
import {Link} from "react-router-dom"

export default function EmptyCart() {
  return (
    <section className="empty-cart section" >
      <h2>empty cart... / akagali kakalu...</h2>
      <button className="btn btn-primary">
      <Link to="/products">Fill it / Jijuze</Link>
      </button>
    </section>
  )
}
