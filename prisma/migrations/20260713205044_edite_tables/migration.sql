/*
  Warnings:

  - You are about to drop the `agent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cpf` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "parking_spot" DROP CONSTRAINT "parking_spot_agent_id_fkey";

-- AlterTable
ALTER TABLE "parking_spot" ALTER COLUMN "agent_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "lastName" VARCHAR(90) NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- DropTable
DROP TABLE "agent";

-- AddForeignKey
ALTER TABLE "parking_spot" ADD CONSTRAINT "parking_spot_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
