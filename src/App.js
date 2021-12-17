import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from './Components/Home'
import Categories from './Components/Categoreis'
import Checkout from './Components/Checkout'

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/categories' element={<Categories/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
      </Routes>
    </>
  );
}

export default App;
