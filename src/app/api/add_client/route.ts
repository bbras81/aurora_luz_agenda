import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function POST(request: Request) {
  const res = await request.json();
  //   console.log(res);
  const { nome, morada, cpostal, localidade, email, telemovel } = res;
  console.log({
    nome,
    morada,
    cpostal,
    localidade,
    email,
    telemovel,
  });

  const result = await prisma.cliente.create({
    data: {
      nome,
      morada,
      cpostal,
      localidade,
      email,
      telemovel,
    },
  });

  return NextResponse.json({ result });
}
