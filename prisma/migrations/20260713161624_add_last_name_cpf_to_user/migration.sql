/*
  Warnings:

  - You are about to drop the column `nome` on the `Agent` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Agent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agent" DROP COLUMN "nome",
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "lastName" VARCHAR(90) NOT NULL,
ADD COLUMN     "name" VARCHAR(90) NOT NULL;
