import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function POST(request: Request) {
  const res = await request.json();
  //   console.log(res);
  const { nome, morada, cpostal, localidade, email, telemovel, quantidade } =
    res;
  console.log({
    nome,
    morada,
    cpostal,
    localidade,
    email,
    telemovel,
    quantidade,
  });

  const result = await prisma.cliente.create({
    data: {
      nome,
      morada,
      cpostal,
      localidade,
      email,
      telemovel,
      quantidade,
    },
  });

  return NextResponse.json({ result });
}
