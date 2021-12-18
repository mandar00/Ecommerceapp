import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from './Components/Home'
import Categories from './Components/Categoreis'
import Checkout from './Components/Checkout'
import Keyboards from "./Components/Keyboards";
import Headphones from "./Components/Headphones";

function App() {
  return (
    <>
      <div>
        <Nav 
          value='2'
        />
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/categories' element={<Categories/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
        <Route exact path='/categories/keyboards' element={<Keyboards/>} />
        <Route exact path='/categories/headphones' element={<Headphones/>} />
      </Routes>
    </>
  );
}

export default App;
