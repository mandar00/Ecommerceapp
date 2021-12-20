import Card2 from "./Card2";
import data from "./data/data.json";

const Keyboards = () => {
  const productskeyBoards = data.filter((val) => {
    return val.id.charAt(1) === "a";
  });
  return (
    <>
      <div className="keyBoardsDiv">
        <div className="catSideDiv">
          <p>FILTERS</p>
          <div className="filters">
            <label htmlFor="filter1">
              <input className="filter1Checkbox" type="checkbox" id="filter1" />{" "}
              Delivery
            </label>
            <label htmlFor="filter2">
              <input className="filter2Checkbox" type="checkbox" id="filter2" />{" "}
              Price:low to high
            </label>
            
          </div>
        </div>
        <div className="keyboardItemsDiv">

        {productskeyBoards.map((val) => {
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
