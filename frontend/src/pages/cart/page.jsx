import { userCartContext } from "../../contexts/useCartContext"

export default function Cart () {

    const { cartItems } = userCartContext();
    console.log(cartItems);
    return (
        <h1>Cart</h1>
        
    )
}