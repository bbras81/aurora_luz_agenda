import React from "react";

import stock from "../../../public/data/Data";

const OrderSummary = () => {
  const [value, setValue] = React.useState(1);
  const total = value * parseFloat(stock.price);
  return (
    <div className="lg:col-span-2 col-span-4 bg-white">
      <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
        Resumo da encomenda
      </h1>
      <ul className="py-6 border-b space-y-6 px-8">
        <li className="grid grid-cols-6 gap-2 border-b-1 ">
          <div className="col-span-1 self-center">
            <img
              src="/agenda-2025-1.png"
              alt="Product"
              className="rounded w-full"
            />
          </div>
          <div className="flex flex-col col-span-3 pt-2">
            <span className="text-gray-600 text-md font-semi-bold">
              {stock.title}
            </span>
          </div>
          <div className="flex flex-col col-span-1 pt-2 self-center">
            <input
              type="text"
              defaultValue={1}
              onChange={(event) => setValue(parseInt(event.target.value))}
              className="block w-full p-2 border border-gray-300 rounded text-center text-sm"
            />
          </div>
          <div className="col-span-1 pt-3 self-center flex justify-end">
            <div className=" text-md">
              <span className="text-pink-400 font-semibold ">€{stock.price}</span>
            </div>
          </div>
        </li>
      </ul>
      <div className="px-8 border-b"></div>
      <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
        <span>Total</span>
        <span>€{total}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
