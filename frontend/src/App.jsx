import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";
import CartProvider from "./contexts/useCartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer></Footer>
      </CartProvider>
    </>
  );
}
