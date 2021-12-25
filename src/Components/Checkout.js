import CheckoutTable from "./CheckoutTable";
import emptyCartImg from "../images/emptycart4.jpg";

const Checkout = ({cartTotal,totalItems}) => {


  const cartItemsNo = 1;
  return (<>
 
      {!cartItemsNo ? <div className="emptyCartDiv"><img src={emptyCartImg} alt="empty cart" /></div> : <CheckoutTable
      cartTotal={cartTotal}
      totalItems={totalItems} /> }
  </>);
};
export default Checkout;




