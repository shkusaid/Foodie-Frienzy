import React, { useEffect } from "react";
import CartPage from "../components/CartPage";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CartPage />
    </div>
  );
}

export default Cart;
