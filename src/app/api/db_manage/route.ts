import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";



async function verificarNovosClientes() {
    // Busca novos clientes na base de dados
    const novosClientes = await prisma.cliente.findMany({
      where: {
        createdAt: {
          gt: new Date(Date.now() - 60 * 1000), // busca clientes criados nos últimos 60 segundos
        },
      },
    });
  