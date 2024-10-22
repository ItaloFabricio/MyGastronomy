import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./contexts/useCartContext";
import { UserProvider } from "./contexts/useUserContext";

export default function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer></Footer>
        </CartProvider>
      </UserProvider>
    </>
  );
}
