import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./componets/main/Navbar";
import LandingPage from "./pages/LandingPage";
import CartPage from "./pages/CartPage";
import Footer from "./componets/main/Footer";
import ProductPage from "./pages/ProductPage";
import { useState } from "react";

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [itemPriceTotal, setItemPriceTotal] = useState(0);
  const [findItems, setFindItems] = useState([]);

  return (
    <div>
    <BrowserRouter>
      <div>
        <Navbar itemCount={itemCount} itemState={setItemCount}/>
        <Routes>
          <Route path="/" element={<LandingPage itemCount={itemCount}/>} />
          <Route path="/Cartpage" element={<CartPage itemCount={itemCount} itemState={setItemCount} priceTotalState={setItemPriceTotal} itemPriceTotal={itemPriceTotal} findItems={findItems} findItemsState={setFindItems}/>} />
          <Route path="product/:id/:name" element={<ProductPage itemCount={itemCount} itemState={setItemCount} priceTotalState={setItemPriceTotal} findItems={findItems} findItemsState={setFindItems}/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
