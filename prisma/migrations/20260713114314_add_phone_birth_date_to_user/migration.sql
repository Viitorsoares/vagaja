/*
  Warnings:

  - Added the required column `birthDate` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Agent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agent" ADD COLUMN     "birthDate" DATE NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
