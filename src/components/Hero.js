import React from "react";

export default function Hero({children}) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Think, Order, Drive</h1>
        <p>Lowoza, Tumya, Ovuge </p>
        {children}
      </div>
    </div>

  )
}
