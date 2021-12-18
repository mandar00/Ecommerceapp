import React from "react";
import productimg from '../images/headphone.jpg'

const CheckoutTable = () => {
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
          <div className="chkOtItemsDiv">
            <div>
            <div className="productImgDiv">
                <img src={productimg} alt="product" />
            </div>
            </div>
            <div><p>keyboard</p></div>
            <div><p>6000</p></div>
            <div><p>1</p></div>
            <div><button className="cancelBtn"><i class="fa fa-times-circle"></i></button></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutTable;
