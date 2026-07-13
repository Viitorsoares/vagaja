-- CreateTable
CREATE TABLE "agent" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(90) NOT NULL,
    "lastName" VARCHAR(90) NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "agent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "agent_email_key" ON "agent"("email");
