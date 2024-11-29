import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
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
          quantidade: data.quantidade,
        },
      });
      res.status(201).json({ message: "Form submitted successfully", cliente });
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ message: "Error submitting form" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
