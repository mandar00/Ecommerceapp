import React from "react";

const Card = ({ value, img }) => {
  return (
    <>
      <div className="mainCardDiv">
        <div className="cardImgdiv">
          <img alt={value} src={img} />
        </div>
        <div className="cardContentDiv">
          <p>Explore the wide range of {value}</p>
          <button className="cardShopBtn">Shop Now.</button>
        </div>
      </div>
    </>
  );
};
export default Card;
