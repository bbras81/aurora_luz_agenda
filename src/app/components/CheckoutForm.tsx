import React from "react";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import value from "./OrderSummary";
import { NextApiRequest, NextApiResponse } from "next";

const CheckoutForm = () => {
  const handleSubmit = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      try {
        const data = req.body;
        const cliente = await prisma.cliente.create({
          data: {
            nome: data.nome,
            morada: data.morada,
            cpostal: data.cpostal,
            email: data.email,
            telemovel: data.telemovel,
            quantidade: value,
          },
        });
        res.status(201).json({ message: "Form submitted successfully" });
      } catch (error) {
        console.error("Error submitting form:", error);
        res.status(500).json({ message: "Error submitting form" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  };

  return (
    <div className="lg:col-span-2 col-span-4 bg-white space-y-8 px-12">
      <form id="payment-form" method="POST" action="" onSubmit={handleSubmit}>
        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
          Pagamento e Dados de Envio
        </h2>
        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">Nome</span>
            <input
              id="name"
              name="name"
              className="focus:outline-none px-3"
              required
            />
          </label>
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">Morada</span>
            <input
              id="morada"
              name="morada"
              className="focus:outline-none px-3"
              required
            />
          </label>
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">C. Postal</span>
            <input
              id="cpostal"
              name="cpostal"
              className="focus:outline-none px-3"
              placeholder="1234-123"
              required
            />
          </label>
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">Email</span>
            <input
              id="email"
              name="email"
              type="email"
              className="focus:outline-none px-3"
              placeholder="nome@examplo.pt"
              required
            />
          </label>
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">Telemóvel</span>
            <input
              id="telemovel"
              name="telemovel"
              className="focus:outline-none px-3"
              required
            />
          </label>
        </fieldset>
        <button className="submit-button px-4 py-3 rounded-full bg-[var(--accent-primary)] text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
          Pagar
        </button>
      </form>
      <br />
    </div>
  );
};

export default CheckoutForm;
