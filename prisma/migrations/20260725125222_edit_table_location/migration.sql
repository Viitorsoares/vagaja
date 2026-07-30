/*
  Warnings:

  - You are about to alter the column `longitude` on the `location` table. The data in that column could be lost. The data in that column will be cast from `Decimal(20,1)` to `Decimal(20,17)`.

*/
-- AlterTable
ALTER TABLE "location" ALTER COLUMN "longitude" SET DATA TYPE DECIMAL(20,17);
