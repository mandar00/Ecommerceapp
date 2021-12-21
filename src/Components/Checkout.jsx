import React,{useState} from "react";
import CheckoutTable from "./CheckoutTable";
import emptyCartImg from "../images/emptycart4.jpg";

const Checkout = () => {


  const cartItemsNo = 1;
  return (<>
 
      {!cartItemsNo ? <div className="emptyCartDiv"><img src={emptyCartImg} alt="empty cart" /></div> : <CheckoutTable /> }
  </>);
};
export default Checkout;




