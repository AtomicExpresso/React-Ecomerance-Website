import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"
import Navbar from "./componets/main/Navbar"
import LandingPage from "./pages/LandingPage"
import CartPage from "./pages/CartPage"

function App() {
  
  return (
    <div>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Cartpage" element={<CartPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
