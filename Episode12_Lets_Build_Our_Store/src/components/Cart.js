import React from "react"
import { useSelector } from "react-redux"
import ItemList from "./ItemList"
import { useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom"

const Cart = () => {
  // less performance
  // const cartItems = useSelector((store) => store);

  // more performance - subscribing to the specific slice only
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();




  return (
    <div className="mx-auto w-6/12">
      <h2 className="my-8 text-2xl font-bold text-center">CART</h2>
      {cartItems.length === 0 
      ? <h2 className="my-8"><Link to="/" className="text-lg font-bold">Add Items to the cart</Link></h2> 
      : <button onClick={() => dispatch(clearCart())} className="border rounded-lg p-2 m-4 block ml-auto text-white bg-red-500">Clear Cart</button>}
      <ItemList itemCards={cartItems} />

    </div>
  )
}

export default Cart