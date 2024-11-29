import React, { useState } from "react";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    morada: "",
    cpostal: "",
    email: "",
    telemovel: "",
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback("Formulário enviado com sucesso!");
        setFormData({
          nome: "",
          morada: "",
          cpostal: "",
          email: "",
          telemovel: "",
        });
      } else {
        const error = await response.json();
        setFeedback(`Erro: ${error.message}`);
      }
    } catch (error) {
      setFeedback("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <div className="lg:col-span-2 col-span-4 bg-white space-y-8 px-12">
      <form id="payment-form" onSubmit={handleSubmit}>
        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
          Pagamento e Dados de Envio
        </h2>
        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">Nome</span>
            <input
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="focus:outline-none px-3"
              required
            />
          </label>
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">Morada</span>
            <input
              name="morada"
              value={formData.morada}
              onChange={handleChange}
              className="focus:outline-none px-3"
              required
            />
          </label>
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">C. Postal</span>
            <input
              name="cpostal"
              value={formData.cpostal}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              className="focus:outline-none px-3"
              placeholder="nome@examplo.pt"
              required
            />
          </label>
          <label className="flex border-b border-gray-200 h-12 py-3 items-center">
            <span className="text-right px-2">Telemóvel</span>
            <input
              name="telemovel"
              value={formData.telemovel}
              onChange={handleChange}
              className="focus:outline-none px-3"
              required
            />
          </label>
        </fieldset>
        <button className="submit-button px-4 py-3 rounded-full bg-[var(--accent-primary)] text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
          Pagar
        </button>
        {feedback && <p className="mt-4 text-red-600">{feedback}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
