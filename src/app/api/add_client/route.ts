import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import stock from "../../../../public/data/Data";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "info.auroradeluz@gmail.com",
    pass: "geux dtuy jlen yvso",
  },
});

export async function POST(request: Request) {
  const res = await request.json();
  //   console.log(res);
  const { nome, morada, cpostal, localidade, email, telemovel, quantidade } =
    res;
  let sum: number = 0;
  sum =
    Number(stock[0]["price"]) * Number(quantidade) + Number(stock[1]["price"]);
  sum = Number(sum.toFixed(2));
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "Aurora de Luz",
    to: email,
    subject: "Obrigado por comprar na Aurora de Luz", // Subject line
    html: `<!DOCTYPE html>
<html lang="pt-PT">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aurora de Luz</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Parkinsans:wght@300..800&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        box-sizing: border-box;
        background-color: #f1ecf1;
        color: rgb(36, 36, 36);
        font-family: "Josefin Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
      }
        body {
          margin: 0;
          padding: 0;
        }
      p {
        text-align: justify;
        magin-left: 10px;
      }
    </style>
  </head>
  <body>
    <div style="display: flex; flex-direction: column">
      <img
        src="https://www.auroradeluz.pt/_next/image?url=%2FLogo%20Terapia%20Hol%C3%ADstica.png&w=256&q=75"
        style="width: 40%; margin: 0 auto"
        alt="Logotipo da Aurora de Luz, representando equilíbrio e espiritualidade, com um design triangular e uma mão estendida para simbolizar conexão e harmonia."
      />
      <h1 style="text-align: center; font-size: 1.5rem">
        Obrigado por comprar na Aurora de Luz
      </h1>
      <p>
        Olá ${nome},<br />

        Muito obrigado por escolher a nossa Agenda Aurora de Luz 2025! 🌟 <br />
        Estamos muito felizes por fazer parte do seu 2025 com mais organização,
        reflexão e equilíbrio. Aqui está o resumo da sua encomenda:
      </p>
      <p>
        <strong>Detalhes do Pedido:</strong> <br />

        Produto: <strong>Agenda Aurora de Luz 2025</strong> <br />
        Quantidade: <strong>${quantidade}</strong> <br />
        Valor Total: <strong>${sum} €</strong> <br />
        Data do Pedido: <strong>${new Date().toLocaleDateString(
          "pt-PT"
        )}</strong>
      </p>
      <p>
        <strong>Dados para Entrega:</strong> <br />
        Nome: <strong>${nome}</strong> <br />
        Endereço:<strong> ${morada}, ${cpostal}, ${localidade}</strong> <br />
        Contato: <strong>${telemovel}</strong>
      </p>
      <p>
        <strong>Forma de Pagamento:</strong> <br />
        Para concluir a sua compra, escolha uma das opções abaixo e envie-nos o
        comprovativo de pagamento: <br />

        1️⃣ MB WAY <br />
        Número: 912812769 <br />
        Nome do Titular: CATARINA ANDREIA MOURA DA SILVA CS <br />
        Valor: ${sum} € <br />
        2️⃣ Transferência Bancária <br />
        IBAN:PT50 0023 0000 4561763590 94 <br />
        Nome do Titular: Catarina Brás <br />
        Valor: ${sum} €
      </p>
      <p>
        Assim que o pagamento for confirmado, daremos seguimento ao envio da sua
        encomenda. <br />
        🛠 Se tiver alguma dúvida ou precisar de ajuda, estamos aqui para si!
        <br />
        Contacte-nos pelo e-mail
        <strong><i>info.auroradeluz@gmail.com</i> </strong> ou pelo WhatsApp
        <strong><i>912812769</i> </strong>. ✨<br />
        Gratidão por fazer parte da nossa comunidade! <br />
        Estamos ansiosos para que a sua Agenda Aurora de Luz 2025 ilumine os
        seus dias! 🌟 Com luz e carinho, www.auroradeluz.pt <br />
        P.S.: Não se esqueça de nos seguir nas redes sociais para mais novidades
        e inspirações: <br />
        Instagram: <strong><i>@auroradeluz.pt</i></strong> Facebook:
        <strong><i>Aurora de Luz Terapias</i></strong>
      </p>
    </div>
  </body>
</html>
`, // html body
  });
  console.log("Message sent: %s", info.messageId);

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
