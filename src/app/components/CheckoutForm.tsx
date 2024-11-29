"use client";

import React from "react";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CheckoutForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const nome = formData.get("nome") as string;
    const morada = formData.get("morada") as string;
    const cpostal = formData.get("cpostal") as string;
    const email = formData.get("email") as string;
    const telemovel = formData.get("telemovel") as string;
    const quantidade = formData.get("quantidade") as string;

    console.log(nome, morada, cpostal, email, telemovel, quantidade);
  };
  return (
    <div className="lg:col-span-2 col-span-4 bg-white space-y-8 px-12">
      <form id="payment-form" method="POST" action={handleSubmit}>
        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
          Pagamento e Dados de Envio
        </h2>
        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">Nome</span>
            <input name="nome" className="focus:outline-none px-3" required />
          </label>
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">Morada</span>
            <input name="morada" className="focus:outline-none px-3" required />
          </label>
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">C. Postal</span>
            <input
              name="cpostal"
              className="focus:outline-none px-3"
              placeholder="1234-123"
              required
            />
          </label>
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">Email</span>
            <input
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
