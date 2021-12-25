import { Route, Routes } from "react-router-dom";
import { useState,useEffect, useRef } from "react";
import Nav from "./Components/Nav";
import Home from './Components/Home'
import Categories from './Components/Categoreis'
import Checkout from './Components/Checkout'
import Keyboards from "./Components/Keyboards";
import Headphones from "./Components/Headphones";

function App() {

  const [cartValue, setCartValue] = useState();

  const getCartItem=(val)=>{
    return localStorage.getItem(`${val}`)?JSON.parse(localStorage.getItem(`${val}`)):[]
  }
  
  
  const setCartItem=(name,val)=>{
    return localStorage.setItem(`${name}`,JSON.stringify(val))
  }

  let cart=[]
  // setCartItem('cart',cart)

  let inCartIds=[]
  // setCartItem('inCartIds',inCartIds)




const addToCart=(e)=>{
  e.target.innerText='In Cart'
  e.target.disabled=true
  const products=getCartItem('productsData')
  const itemToAdd=products.find((val)=>{
    return val.id===e.target.name
  })
  itemToAdd.amount=1
  cart=[...cart,itemToAdd] 
  setCartItem('cart',cart)
  inCartIds=[...inCartIds,itemToAdd.id]
  setCartItem('inCartIds',inCartIds)
  

}


let total = 0;
const cartTotal = () => {
  const cart = getCartItem("cart");
  cart.forEach((val) => {
    return (total += val.price * val.amount);
  });
  // setCartValue(total)
};

cartTotal();
  return (
    <>
      <div>
        <Nav 
          value='2'
        />
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/categories' element={<Categories/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
        <Route exact path='/categories/keyboards' element={<Keyboards/>} />
        <Route exact path='/categories/headphones' element={<Headphones
          addToCart={addToCart}
        />} />
      </Routes>
    </>
  );
}

export default App;
