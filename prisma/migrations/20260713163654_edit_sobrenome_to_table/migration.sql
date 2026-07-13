/*
  Warnings:

  - You are about to drop the column `lastName` on the `agent` table. All the data in the column will be lost.
  - Added the required column `sobreNome` to the `agent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "agent" DROP COLUMN "lastName",
ADD COLUMN     "sobreNome" VARCHAR(90) NOT NULL;
