import { useEffect, useState } from "react";
import Image from "next/image"; // Certifique-se de importar o componente

import stock from "../../../public/data/Data";

const OrderSummary = () => {
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    const savedQuantidade = localStorage.getItem("quantidade");
    if (savedQuantidade) {
      setQuantidade(parseInt(savedQuantidade, 10));
    }
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantidade(value);
    localStorage.setItem("quantidade", value.toString());
  };

  const total =
    quantidade * parseFloat(stock[0].price) + parseFloat(stock[1].price);
  return (
    <div className="lg:col-span-2 col-span-4 bg-white">
      <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
        Resumo da encomenda
      </h1>
      <ul className="py-6 border-b space-y-6 px-8">
        <li className="grid grid-cols-6 gap-2 border-b-1 ">
          <div className="col-span-1 self-center">
            <Image
              src="/agenda-2025-1.png"
              alt="Product"
              width={700} // Defina a largura
              height={500} // Defina a altura
              className="rounded w-full"
            />
          </div>
          <div className="flex flex-col col-span-3 pt-2">
            <span className="text-gray-600 text-md font-semi-bold">
              {stock[0].title}
            </span>
          </div>
          <div className="flex flex-col col-span-1 pt-2 self-center">
            <input
              id="quantidade"
              type="text"
              defaultValue={quantidade}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded text-center text-sm"
            />
          </div>
          <div className="col-span-1 pt-3 self-center flex justify-end">
            <div className=" text-md">
              <span className="text-pink-400 font-semibold ">
                €{stock[0].price}
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div className="px-8 border-b"></div>
      <div className="font-semibold text-base px-8 flex justify-between  text-gray-600">
        <span>Portes de envio</span>
        <span>€{stock[1].price}</span>
      </div>
      <div className="font-semibold text-xl px-8 flex justify-between pt-4 text-gray-600">
        <span>Total</span>
        <span>€{isNaN(total) ? 0 : total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
