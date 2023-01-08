/*
  Warnings:

  - You are about to drop the `ADM` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "ADM_email_key";

-- DropIndex
DROP INDEX "ADM_cnpj_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ADM";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ADMs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "total" BIGINT NOT NULL,
    "userId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Cards" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cep" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "orderId" TEXT,
    CONSTRAINT "Products_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("description", "id", "img", "name", "price") SELECT "description", "id", "img", "name", "price" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "ADMs_cnpj_key" ON "ADMs"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "ADMs_email_key" ON "ADMs"("email");
