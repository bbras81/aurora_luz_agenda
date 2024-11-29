"use client";

import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";

export default function Comprar() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-4 border-2">
      <OrderSummary />
      <div className="px-8 border-b lg:hidden"></div>
      <CheckoutForm />
    </div>
  );
}
