import Axios from 'axios';
import React from 'react';
import axios from "axios"
import url from '../utils/URL';
import {FeaturedProducts, FlattenedProduct} from "../utils/helpers"

export const ProductContext = React.createContext();
/**
 * useEffect();// this would be a subtitute for ComponentDidMount(), for the class base comps 
 * 
 * so useEffects lets us perfom side effects like data fetching, window events listeners
 * by defualt it runs after each render and these two triggers it i.e. state change or props change 
 *  and it takes two parameters and w
 * 
 * 1st callback // which returns a cleanup functions to avoid memory leaks, this fxn cannot be async 
 * because async return a promise 
 * 
 *2nd array of values(dependences)// instrucing the useeffect when to 
 * 
 */
//Provider, Consumer insteady we us the useContext() hook

export default function ProductProvider({children}) {
    const [isLoading, setIsLoading] = React.useState(false)
    const [products, setProducts] = React.useState([]);
    const [featuredProducts, setFeaturedProducts] = React.useState([]);



    React.useEffect(() =>{
        setIsLoading(true);
        axios 
        .get(`${url}/products`)
        .then(response => {
                const products = FlattenedProduct(response.data)
                const featured = FeaturedProducts(FlattenedProduct(response.data));
                setProducts(products);
                setIsLoading(false);
                setFeaturedProducts(featured);
            });
        return (() =>{})
    }, []);

    return (
        <ProductContext.Provider value={{isLoading, products, featuredProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

