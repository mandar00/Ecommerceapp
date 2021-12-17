import React from "react";
import Card from "./Card";
import keyboardImg from '../images/keyboard.jpg'
import headphoneimg from '../images/headphone.jpg'

const Categoreis = () => {
  return (
    <>
      <div className="mainCatDiv">
        <div className="catSideDiv">
            <p>
                FILTERS
            </p>
            <div className="filters">
                <label htmlFor="filter1" >
                    <input className="filter1Checkbox" type="checkbox" id="filter1"/> filter 1
                </label>
                <label htmlFor="filter2" >
                    <input className="filter2Checkbox" type="checkbox" id="filter2"/> filter 2
                </label>
                <label htmlFor="filter3" >
                    <input className="filter3Checkbox" type="checkbox" id="filter3"/> filter 3
                </label>
            </div>
        </div>
        <div className="selectCatDiv">
            <Card 
                value="headphones"
                img={keyboardImg}
            />
            <Card 
                value="keyboards"
                img={headphoneimg}
            />
        </div>
      </div>
    </>
  );
};
export default Categoreis;
