/*
  Warnings:

  - You are about to drop the `Agent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "parking_spot" DROP CONSTRAINT "parking_spot_agent_id_fkey";

-- DropTable
DROP TABLE "Agent";

-- CreateTable
CREATE TABLE "agent" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(90) NOT NULL,
    "lastName" VARCHAR(90) NOT NULL,
    "birthDate" DATE NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "agent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "agent_email_key" ON "agent"("email");

-- AddForeignKey
ALTER TABLE "parking_spot" ADD CONSTRAINT "parking_spot_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
