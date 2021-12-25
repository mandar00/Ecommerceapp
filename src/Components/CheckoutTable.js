import React, { useEffect, useState } from "react";

const CheckoutTable = ({cartTotal,totalItems}) => {
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
    cartTotal(); 
    totalItems()
       
  } 

  const removeItem=(e)=>{
    const cart=getCartItem('cart')
    const Cart=cart.filter((val)=>{
        return val.id!==e.target.id;
    })
    setCartItem('cart',Cart)
    setItemRemoved(!itemRemoved)
    const ids=getCartItem('inCartIds')
    console.log(ids)
    const Ids=ids.filter((val)=>{
        return val!==e.target.id;
    })
    setCartItem('inCartIds',Ids)
    cartTotal();
    totalItems()

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
                  <button  className="cancelBtn">
                    <i id={id} onClick={removeItem}  className="fa fa-times-circle"></i>
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
