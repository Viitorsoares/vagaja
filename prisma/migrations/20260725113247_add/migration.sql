-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "longitude" DECIMAL(20,18) NOT NULL,
    "latitude" DECIMAL(20,18) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "location_userId_idx" ON "location"("userId");

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
