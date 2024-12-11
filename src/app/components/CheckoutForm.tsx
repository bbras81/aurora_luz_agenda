import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CheckoutForm = () => {
  const router = useRouter();

  // Gerenciar o estado dos campos do formulário
  const [formData, setFormData] = useState({
    nome: "",
    morada: "",
    cpostal: "",
    localidade: "",
    email: "",
    telemovel: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o recarregamento da página

    const { nome, morada, cpostal, localidade, email, telemovel } = formData;
    const quantidade = localStorage.getItem("quantidade") || "1";

    // Normalização do e-mail
    const normalizedEmail = email.trim().toLowerCase();

    // Validação dos campos
    if (
      !nome ||
      !morada ||
      !cpostal ||
      !localidade ||
      !normalizedEmail ||
      !telemovel ||
      !quantidade
    ) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

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
          email: normalizedEmail,
          telemovel,
          quantidade,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao processar o pedido.");
      }

      // Limpar o formulário após o envio
      setFormData({
        nome: "",
        morada: "",
        cpostal: "",
        localidade: "",
        email: "",
        telemovel: "",
      });

      router.push("/instrucoes");

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
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Erro ao enviar dados:", error);
        alert(
          error.message ||
            "Ocorreu um erro ao processar o pedido. Tente novamente."
        );
      } else {
        console.error("Erro desconhecido:", error);
        alert("Ocorreu um erro desconhecido.");
      }
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
        {["nome", "morada", "cpostal", "localidade", "email", "telemovel"].map(
          (field) => (
            <div className="mb-5" key={field}>
              <label
                htmlFor={field}
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                name={field}
                id={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="autofocus bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={`${field}`}
                required
              />
            </div>
          )
        )}
        <button
          id="pay-button"
          type="submit"
          className={`text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
        >
          Pagar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
