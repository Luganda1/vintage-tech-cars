import React from "react";
import ProductList from "./ProductList";
import {ProductContext} from "../../context/products";
import Loading from "../Loading";


export default function FeaturedProducts() {
  const {isLoading, featuredProducts} = React.useContext(ProductContext);

  if(isLoading) {
    return <Loading />
  }
  return <ProductList title="Featured Products" products={featuredProducts}/>;
}
