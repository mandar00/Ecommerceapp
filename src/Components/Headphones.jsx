import { useEffect, useState } from "react";

import Card2 from "./Card2";
import data from "./data/data.json";

const Headphones = () => {
  const [isSorted, setIsSorted] = useState(true);
  console.log(isSorted)
  const productsheadPhones = data.filter((val) => {
    return val.id.charAt(1) === "b";
  });

  const [productsData, setProductsData] = useState(productsheadPhones);

  const mycomparator = (a, b) => {
    return parseInt(a.price, 10) - parseInt(b.price, 10);
  };

 

  const sort = () => {
    console.log(isSorted);
    if (isSorted) {
      const newData = productsData.sort(mycomparator);
      setProductsData(newData);
    }
    else{
      setProductsData(productsheadPhones)
    }
  };

  return (
    <>
      <div className="headphonesdiv">
        <div className="catSideDiv">
          <p>FILTERS</p>
          <div className="filters">
            <label htmlFor="filter1">
              <input className="filter1Checkbox" type="checkbox" id="filter1" />
              Delivery
            </label>
            <label htmlFor="filter2">
              <input
                className="filter2Checkbox"
                type="checkbox"
                id="filter2"
                onChange={() => {
                  setIsSorted(val=>!val)
                  console.log(isSorted)
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
