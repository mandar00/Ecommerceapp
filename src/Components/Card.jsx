import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ value, img }) => {
  return (
    <>
      <div className="mainCardDiv">
        <div className="cardImgdiv">
          <img alt={value} src={img} />
        </div>
        <div className="cardContentDiv">
          <p>Explore the wide range of {value}</p>
          <NavLink exact='true' activeclassname='active' to={`/categories/${value}`} >
          <button className="cardShopBtn">Shop Now.</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Card;
