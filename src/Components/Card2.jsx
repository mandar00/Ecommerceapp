import React, { useEffect, useState } from "react";

const Card2 = ({price, value, img,instock }) => {
  const [isdisable,setIsDisable]=useState(false)
    const rvalue=value.slice(0,20)
  useEffect(()=>{
    if(!instock){
      setIsDisable(true)
    }
  },[instock])
  return (
    <>
      <div className="mainCardDiv">
        <div className="cardImgdiv">
          <img loading="lazy" alt={value} src={img}  />
        </div>
        <div className="cardContentDiv">
          <p className="itemName">{rvalue}{rvalue.length>17?"..":" "}</p>
          <p>₹{price}</p>
          <p className={instock? "green" : "redd"}>{instock?"in Stock":"out of stock"}</p>
          <button disabled={isdisable} className={instock?"in_stock":"out_of_stock"}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
export default Card2;
