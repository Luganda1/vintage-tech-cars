import React from "react";
// import localCart from "../utils/localCart";


//Get items in the cart from the local storage
    function getCartLocal() {
        return localStorage.getItem("cart")
        ?JSON.parse(localStorage.getItem("cart"))
        :[];
    }


const CartContext = React.createContext();

function CartProvider({children}) {
    const [total, setTotal] = React.useState(0);
    const [cart, setCart] = React.useState(getCartLocal());
    const [cartItems, setCartItems] = React.useState(0);

        React.useEffect(() => {
            //local store so that if the browser refreshes i can 
            localStorage.setItem("cart", JSON.stringify(cart));
            //cart item
            let newCartItem = cart.reduce((total, cartItem) => {
                return (total += cartItem.amount);
            }, 0)
            setCartItems(newCartItem);

            //cart total
            let newTotal = cart.reduce((total, cartItem) => {
                return (total += (cartItem.amount * cartItem.price));
            }, 0)
            newTotal = parseFloat(newTotal.toFixed(2));
            setTotal(newTotal)
        }, [cart])

    //Remove Item
    const removeItem = id => {
        // let myCart = [...cart].filter(item => item.id !== id)
        // setCart(myCart)
        setCart([...cart].filter(item => item.id !== id))
    };

    //Increase Amount 
    const increaseAmount = id => {
        setCart([...cart].map(item => {
            return item.id === id
            ?{...item, amount: item.amount + 1}
            :{...item}
        }))
    };

    //Decrease Amount 
    const decreaseAmount = (id, amount) => {
        if(amount === 1) {
            removeItem(id);
        }else {
            setCart([...cart].map(item => {
                return item.id === id 
                ?{...item, amount: item.amount - 1}
                :{...item}
            }))
        }
    };

    //Add to cart
    const addToCart = product => {
        // console.log(product);
        const {id, image, title, price} = product;
        const item = [...cart].find(item => item.id === id)
        if(item) {
            increaseAmount(id);
            return;
        }
        else {
            const newItem = {id, image, title, price, amount: 1};
            setCart([...cart, newItem]);
        }
    };

    // clear cart 
    const clearCart = () => {
        setCart([])
    };

    return <CartContext.Provider value={{
        total, 
        cart, 
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
        }}>
            {children}
    </CartContext.Provider>
    
}

export {CartContext, CartProvider}