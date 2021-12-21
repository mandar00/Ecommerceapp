import {  useState } from "react";

import Card2 from "./Card2";
import data from "./data/data.json";

const Headphones = () => {
  const [isSorted, setIsSorted] = useState(true);
  const [isDelivery ,setIsDelivery]=useState(true)
  console.log(isSorted)
  console.log(isDelivery)



  const productsheadPhones = data.filter((val) => {
    return val.id.charAt(1) === "b";
  });
  
  const [productsData, setProductsData] = useState(productsheadPhones);
  

  const mycomparator = (a, b) => {
    return parseInt(a.price, 10) - parseInt(b.price, 10);
  };

 const delivery=()=>{
   console.log(isDelivery)
   if(isDelivery){
    const deliveryTrue=productsData.filter((val)=>{
      return val.delivery===true;
    })
    setProductsData(deliveryTrue)
   }else{
     if(!isSorted){
      sort()
     }
     else{
      setProductsData(productsheadPhones)

     }
   }
 
 }


 const sort = () => {
   console.log(isSorted)
   if (isSorted) {
      const sortedData = productsData.sort(mycomparator);
      setProductsData((perval)=>{
        return(
          perval=sortedData
        )
      });
    }
    else{
      if(!isDelivery){
          delivery()
        }
      else{

        setProductsData(productsheadPhones)
      }
    
    }
  };

  return (
    <>
      <div className="headphonesdiv">
        <div className="catSideDiv">
          <p>FILTERS</p>
          <div className="filters">
            <label htmlFor="filter1">
              <input className="filter1Checkbox" type="checkbox" id="filter1" 
              onChange={()=>{
                setIsDelivery(!isDelivery)
                delivery()
              }} />
              Delivery
            </label>
            <label htmlFor="filter2">
              <input
                className="filter2Checkbox"
                type="checkbox"
                id="filter2"
                onChange={() => {
                  setIsSorted(val=>!val)
                  sort();
                }}
              />
              Price:low To High
            </label>
          </div>
        </div>

        <div className="headphoneItemsDiv">
          {productsData.map((value) => {
            return (
              <Card2
                key={value.id}
                value={value.name}
                price={value.price}
                img={value.thumbnail}
                instock={value.inStock}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Headphones;
