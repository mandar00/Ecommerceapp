import React from "react";
import Card from "./Card";
import keyboardImg from '../images/keyboard.jpg'
import headphoneimg from '../images/headphone.jpg'

const Categoreis = () => {
  return (
    <>
      <div className="mainCatDiv">
    
        <div className="selectCatDiv">
            <Card 
                value="keyboards"
                img={keyboardImg}
            />
            <Card 
                value="headphones"
                img={headphoneimg}
                
            />
        </div>
      </div>
    </>
  );
};
export default Categoreis;
