import Card2 from "./Card2";
import data from "./data/data.json";

const Keyboards = () => {
    const products=data.filter((val)=>{
        return val.id.charAt(1)==='a';
    })
  return (
    <>
        <div className="keyBoardsDiv">

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
        {products.map((val)=>{
            return (<Card2
                value={val.name}
                img={val.thumbnail}
            />)
        })}
        </div>
    </>
  );
};
export default Keyboards;
