"use client";

import { useState } from "react";

const CarrinhoForm = () => {
  const [nome, setNome] = useState("");
  const [morada, setMorada] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  // Lista de itens no carrinho
  const itensCarrinho = [
    {
      id: 1,
      nome: "Agenda 2025",
      descricao: "Agenda holística 2025, ideal para organização e bem-estar.",
      imagem: "/agenda-2025-1.png",
      preco: 30.0,
      quantidade,
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/comprar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          morada,
          email,
          telefone,
          quantidade,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {/* Carrinho de Compras - Itens */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center mb-12 md:mb-0">
        <h2 className="text-lg font-bold mb-4">Carrinho de Compras</h2>
        {itensCarrinho.map((item) => (
          <div key={item.id} className="flex flex-row items-center mb-6">
            <img
              src={item.imagem}
              alt={item.nome}
              className="w-20 h-20 object-cover rounded-lg shadow-lg"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold">{item.nome}</h3>
              <p className="text-sm">{item.descricao}</p>
              <p className="text-sm">Quantidade: {item.quantidade}</p>
              <p className="text-sm">Preço: €{item.preco}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Formulário de Pagamento */}
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
        <h2 className="text-lg font-bold mb-4">Finalizar Compra</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg">
          <label className="block mb-2 text-sm font-medium">
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className="block w-full p-2 border border-gray-300 rounded text-sm"
            />
          </label>
          <label className="block mb-2 text-sm font-medium">
            Morada de Envio:
            <input
              type="text"
              value={morada}
              onChange={(event) => setMorada(event.target.value)}
              className="block w-full p-2 border border-gray-300 rounded text-sm"
            />
          </label>
          <label className="block mb-2 text-sm font-medium">
            Código Postal:
            <input
              type="text"
              value={morada}
              onChange={(event) => setMorada(event.target.value)}
              className="block w-full p-2 border border-gray-300 rounded text-sm"
            />
          </label>
          <label className="block mb-2 text-sm font-medium">
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="block w-full p-2 border border-gray-300 rounded text-sm"
            />
          </label>
          <label className="block mb-2 text-sm font-medium">
            Telefone:
            <input
              type="tel"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
              className="block w-full p-2 border border-gray-300 rounded text-sm"
            />
          </label>
          <button
            type="submit"
            disabled={true}
            className="bg-[var(--accent-primary)] hover:opacity-90 transition-opacity text-white font-bold py-2 px-6 rounded mt-4"
          >
            Finalizar Compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarrinhoForm;
