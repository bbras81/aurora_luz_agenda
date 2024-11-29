import { useState } from "react";
import stock from "../../../public/data/Data";

export default function Form() {
  const [nome, setNome] = useState("");
  const [morada, setMorada] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  // Lista de itens no carrinho

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nome || !morada || !email || !telefone) {
      alert("Preencha todos os campos!");
      return;
    }

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

      if (!response.ok) {
        throw new Error(`Erro ao processar a compra: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Erro ao processar a compra:", error);
    }
  };
  return (
    <div className=" block px-4 bg-gray-200">
      <div className="  ">
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
}
