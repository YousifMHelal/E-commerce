import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Signin from './pages/SignIn'
import Registration from './pages/Registration'
import Error from "./pages/Error";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import CatProductsList from "./pages/CatProductsList";
import ProductInfo from "./pages/ProductInfo";
import NavBar from "./components/Utility/NavBar";
import Footer from "./components/Utility/Footer";


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="signin" element={<Signin/>} />
        <Route path="signup" element={<Registration/>} />
        <Route path="wishlist" element={<WishList/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="Products/cat/:id" element={<CatProductsList/>} />
        <Route path="Product/info/:id" element={<ProductInfo/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
