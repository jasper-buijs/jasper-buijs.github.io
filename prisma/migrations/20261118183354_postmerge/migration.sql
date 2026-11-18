-- CreateTable
CREATE TABLE "PortugalPayments" (
    "id" SERIAL NOT NULL,
    "payed" BOOLEAN NOT NULL DEFAULT false,
    "documentUrl" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PortugalPayments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PortugalPayments" ADD CONSTRAINT "PortugalPayments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
