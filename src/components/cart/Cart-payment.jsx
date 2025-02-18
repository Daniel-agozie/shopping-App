import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { AddContext } from "../../context/Context"

const CartPayment = () => {

  const {addCart,AddOrders} = useContext(AddContext);

  const total = addCart.reduce((acc, cart) => {
     return acc + (cart.priceCents * cart.quantity) / 100
  },0);

  const taxCent = total * 0.1;

  const totalCents = total + taxCent;

  
  return (
    <div>
    {addCart.length === 0 ? "": (
    <div className="border-4 px-5 mr-3 ml-3 animate-slideleft">
      <div className="font-bold mb-3 md:text-sm text-3xl">Order Summary</div>

 
        <div className="grid grid-cols-2 mb-2 md:text-sm text-2xl">
          <div>Items({addCart.length}):</div>
          <div className="text-right">${total.toFixed(2)}</div>
        </div>

        {/* <div className="grid grid-cols-2 mb-2">
          <div>Shopping & Handling:</div>
          <div className="text-right">$42.75</div>
        </div> */}

        {/* <div className="grid grid-cols-2 mb-2">
          <div>Total before tax:</div>
          <div className="text-right">$42.75</div>
        </div> */}

        <div className="grid grid-cols-2 mb-2 md:text-sm text-2xl">
          <div>Estimated Tax(10%):</div>
          <div className="text-right">${taxCent.toFixed(2)}</div>
        </div>

        <div className="grid grid-cols-2 mt-5 border-t-4 font-bold text-red-600 md:text-sm text-2xl">
          <div>Order Total:</div>
          <div className="text-right">${totalCents.toFixed(2)}</div>
        </div>
        <NavLink to="/orders">
          <button className="bg-yellow-400 text-sm rounded-lg font-bold w-full pt-3 pb-2 mt-2 mb-2 md:text-sm text-2xl" onClick={() => {
            AddOrders()
          }}>Place Your order</button>
        </NavLink>

    </div>
    )}
    </div>
  )
}

export default CartPayment