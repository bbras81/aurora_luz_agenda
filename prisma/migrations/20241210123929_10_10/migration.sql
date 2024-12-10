-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "morada" TEXT NOT NULL,
    "cpostal" TEXT NOT NULL,
    "localidade" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telemovel" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);
