"use client";

import { useRouter } from "next/navigation";
import React from "react";

const CheckoutForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o recarregamento da página
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    // Obter os valores do formulário
    const nome = formData.get("nome")?.toString().trim();
    const morada = formData.get("morada")?.toString().trim();
    const cpostal = formData.get("cpostal")?.toString().trim();
    const localidade = formData.get("localidade")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const telemovel = formData.get("telemovel")?.toString().trim();
    const quantidade = localStorage.getItem("quantidade") || "1";

    // Validação dos campos
    if (!nome) {
      alert("Por favor, insira o seu nome.");
      return;
    }
    if (!morada) {
      alert("Por favor, insira a sua morada.");
      return;
    }
    if (cpostal && !/^\d{4}-\d{3}$/.test(cpostal)) {
      alert("Por favor, insira um código postal válido (ex: 1234-567).");
      return;
    }
    if (!/^[a-zA-ZÀ-ÿ\s]{2,50}$/.test(localidade ?? "")) {
      alert("Por favor, insira uma localidade válida (máximo 50 caracteres).");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email!)) {
      alert("Por favor, insira um email válido.");
      return;
    }
    if (!/^\d{9}$/.test(telemovel!)) {
      alert("Por favor, insira um número de telemóvel válido com 9 dígitos.");
      return;
    }
    if (!/^[1-9]\d*$/.test(quantidade.toString())) {
      alert("Por favor, insira uma quantidade válida.");
      return;
    }
    // console.log("Dados validados:", formDataObject);

    try {
      const response = await fetch("/api/add_client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          morada,
          cpostal,
          localidade,
          email,
          telemovel,
          quantidade,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados. Tente novamente.");
      }

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Purchase", {
          value: 13.97, // valor do produto
          currency: "EUR", // moeda
          content_name: "Agenda Aurora de Luz 2025",
          content_category: "Agenda",
          content_ids: ["pay-button"], // identificador único
          content_type: "product",
        });
      }

      event.currentTarget.reset();
      router.push("/instrucoes");

      // Limpar o formulário

      // Redirecionar para a próxima página
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Ocorreu um erro ao processar o pedido. Tente novamente.");
    } finally {
      setIsSubmitting(false); // Garante que o botão é reativado após o envio
    }
  };

  return (
    <div className="lg:col-span-2 col-span-4 bg-white">
      <h2 className="uppercase tracking-wide text-lg text-center font-semibold text-gray-700 my-2">
        Pagamento e Dados de Envio
      </h2>
      <form
        id="payment-form"
        method="POST"
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto mb-6"
      >
        <div className="mb-5">
          <label
            htmlFor="nome"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nome
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="autofocus bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nome e apelido"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="morada"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Morada
          </label>
          <input
            type="text"
            name="morada"
            id="morada"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Rua e número"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="cpostal"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Código Postal
          </label>
          <input
            type="text"
            name="cpostal"
            id="cpostal"
            className="autofocus bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="1234-123"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="localidade"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Localidade
          </label>
          <input
            type="text"
            name="localidade"
            id="localidade"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Localidade"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="autofocus bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Seu email"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="telemovel"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Telemóvel
          </label>
          <input
            type="text"
            name="telemovel"
            id="telemovel"
            className="autofocus bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="910000000"
            required
          />
        </div>
        <button
          id="pay-button"
          type="submit"
          disabled={isSubmitting}
          className={`text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Processando..." : "Pagar"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
