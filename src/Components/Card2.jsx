import React from "react";

const Card2 = ({ value, img }) => {
  const imgLoad=async()=>{
    
  }
  return (
    <>
      <div className="mainCardDiv">
        <div className="cardImgdiv">
          <img loading="lazy" alt={value} src={img} lowsrc='../images/spinning-loading.gif' />
        </div>
        <div className="cardContentDiv">
          <p> {value}</p>
          <button className="cardShopBtn">Add to Cart</button>
        </div>
      </div>
    </>
  );
};
export default Card2;
