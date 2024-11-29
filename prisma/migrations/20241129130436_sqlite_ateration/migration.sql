-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "morada" TEXT NOT NULL,
    "cpostal" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telemovel" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");
