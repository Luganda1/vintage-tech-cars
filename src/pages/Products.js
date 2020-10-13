import React, {useContext}from "react";
import {ProductContext} from '../context/products'
import Loading from "../components/Loading"
import ProductList from "../components/Products/ProductList"

export default function Products() {
  const{isLoading, products} = React.useContext(ProductContext)
if(isLoading){
  return <Loading></Loading>
}
  return <ProductList
    title="ourProducts"
    products={products}
  ></ProductList>;
}
