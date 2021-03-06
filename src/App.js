import React from "react";
//react router dom
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
//pages
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails';
import Follow from './pages/Follow'
//components
import Header from './components/Header';
import Alert from "./components/Alert"
export default function App() {
  return (
    <Router>
    <Alert />
    <Header></Header>
      <Switch>
        <Route exact={true} path='/'>
          <Home ></Home>
        </Route>

        <Route path="/about">
          <About ></About>
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/checkout">
          <Checkout></Checkout>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/follow">
          <Follow />
        </Route>

        <Route exact path="/products">
          <Products />
        </Route>

        <Route path="/products/:id" children={<ProductDetails></ProductDetails>} ></Route>

        <Route path="*">
          <Error ></Error>
        </Route>
      </Switch>
    </Router>
  );
}
