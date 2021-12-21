import { useState } from "react/cjs/react.development";
import Card2 from "./Card2";
import data from "./data/data.json";

const Keyboards = () => {

  const [isSorted, setIsSorted] = useState(true);
  const [isDelivery ,setIsDelivery]=useState(true)
  console.log(isSorted)
  console.log(isDelivery)

  const productskeyBoards = data.filter((val) => {
    return val.id.charAt(1) === "a";
  });

  const[productsData,setProductsData]=useState(productskeyBoards)


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
      setProductsData(productskeyBoards)

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

        setProductsData(productskeyBoards)
      }
    
    }
  };
  return (
    <>
      <div className="keyBoardsDiv">
        <div className="catSideDiv">
          <p>FILTERS</p>
          <div className="filters">
            <label htmlFor="filter1">
              <input className="filter1Checkbox" type="checkbox" id="filter1" 
              onChange={()=>{
                setIsDelivery(!isDelivery)
                delivery()
              }}
               />
              Delivery
            </label>
            <label htmlFor="filter2">
              <input className="filter2Checkbox" type="checkbox" id="filter2" 
              onChange={()=>{
                setIsSorted(val=>!val)
                  sort();
              }} />
              Price:low to high
            </label>
            
          </div>
        </div>
        <div className="keyboardItemsDiv">

        {productsData.map((val) => {
          return (
            <Card2
              key={val.id}
              value={val.name}
              price={val.price}
              img={val.thumbnail}
              instock={val.inStock}
            />
          );
        })}
        </div>
      </div>
    </>
  );
};
export default Keyboards;
