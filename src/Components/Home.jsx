import React from "react";
import homeimg from '../images/home2.svg'

const Home = () => {
  return (
    <>
      <div className="mainHomeDiv">
        <div className="homeTitleDiv">
          <p>Welcome to Electro Hunt !</p>
          <p>Check Out amazing deals and Offers!!!</p>
          <button className="homeBtn">Shop Now</button>
        </div>

        <div className="homeImgDiv">
          <img alt="shopping" src={homeimg} />
        </div>
      </div>
    </>
  );
};
export default Home;
