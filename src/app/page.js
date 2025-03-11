import Image from "next/image";
import NavBar from "./components/navbar";
import Home from "./components/home";

import Product from "./viewproduct/product";
import Offer from "./components/offer";

import Footer from "./components/footer";
import { CartProvider } from "./components/cart";

export default function App() {
  return (
    <CartProvider>
      <div className="font-manrope">
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
        <div id="home">
          <Home />
        </div>
        <Product />
        <Offer />

        <Footer />
      </div>
    </CartProvider>
  );
}
