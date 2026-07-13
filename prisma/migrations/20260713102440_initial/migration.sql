-- CreateEnum
CREATE TYPE "StatusVagas" AS ENUM ('Livre', 'Ocupada');

-- CreateTable
CREATE TABLE "Agent" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(90) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parking_spot" (
    "id" SERIAL NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "status" "StatusVagas" NOT NULL DEFAULT 'Livre',
    "released_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "agent_id" INTEGER NOT NULL,

    CONSTRAINT "parking_spot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agent_email_key" ON "Agent"("email");

-- AddForeignKey
ALTER TABLE "parking_spot" ADD CONSTRAINT "parking_spot_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
