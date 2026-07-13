/*
  Warnings:

  - You are about to drop the column `sobreNome` on the `agent` table. All the data in the column will be lost.
  - Added the required column `lastName` to the `agent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "agent" DROP COLUMN "sobreNome",
ADD COLUMN     "lastName" VARCHAR(90) NOT NULL;
