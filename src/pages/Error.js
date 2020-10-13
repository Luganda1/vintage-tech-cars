import React from "react";
import {Link } from "react-router-dom"

export default function Error() {
  return (
    <section className="error-page section ">
      <div className="error-container fix1">
        <h1>Oops! Wano okubye bali</h1>
        <Link to="/" className="btn btn-primary">Back Home / dayo</Link>
      </div>
    </section>
  )
  
}
