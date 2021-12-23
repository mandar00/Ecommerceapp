import React, { useEffect, useState } from "react";
import { enableAgain } from "./Headphones";

const CheckoutTable = () => {
const[itemRemoved,setItemRemoved]=useState(true)

  let getCartItems = localStorage.getItem("cart");
  let cartItems = JSON.parse(getCartItems);

  // console.log(cartItems);

  const getCartItem=(val)=>{
    return localStorage.getItem(`${val}`)?JSON.parse(localStorage.getItem(`${val}`)):[]
  }
  
  
  const setCartItem=(name,val)=>{
    return localStorage.setItem(`${name}`,JSON.stringify(val))
  }

  useEffect(()=>{

  },[itemRemoved])

  const amountEdited=(e)=>{
    let index=cartItems.findIndex((val)=>{
      return e.target.name===val.id;
    })
    console.log(cartItems[index])
    cartItems[index].amount=e.target.value;
    
    localStorage.setItem('cart',JSON.stringify(cartItems))
  } 

  const removeItem=(e)=>{
    cartItems=cartItems.filter((val)=>{
      return val.id!==e.target.id
    })
    console.log(cartItems)
    localStorage.setItem('cart',JSON.stringify(cartItems))
    setItemRemoved(!itemRemoved)
    const ids=getCartItem('inCartIds')
    const Ids=ids.filter((val)=>{
      return val!==e.target.id
    })
    console.log(Ids)
   
   
  }


  return (
    <>
      <div className="checkOutDiv">
        <div className="chkOtMainDiv">
          <div className="chkOtHeadingDiv">
            <p></p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p></p>
          </div>
          <hr className="chkOutHr" />

          {cartItems.map(({thumbnail,name,price,id,amount}) => {


            return (
              <div className="chkOtItemsDiv" key={id}>
                <div>
                  <div className="productImgDiv">
                    <img src={thumbnail} alt="product" />
                  </div>
                </div>
                  <div><p>{name.slice(0,13)}{name.length>10?"..":" "}</p></div>
                <div><p>{price}</p></div>
                <div><input name={id} onChange={amountEdited} contentEditable='true' className="checkOutItemAmount" type='text' defaultValue={amount}></input></div>
                <div>
                  <button   className="cancelBtn">
                    <i onClick={removeItem} id={id} className="fa fa-times-circle"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CheckoutTable;
