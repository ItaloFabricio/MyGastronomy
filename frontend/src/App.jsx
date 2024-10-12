import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"
import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer></Footer>
    </>
  )
}
