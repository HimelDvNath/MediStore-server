/*
  Warnings:

  - You are about to drop the `order_item` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `medicineId` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerId` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "order_item_medicineId_fkey";

-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "order_item_orderId_fkey";

-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "order_item_sellerId_fkey";

-- AlterTable
ALTER TABLE "order" ADD COLUMN     "medicineId" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "sellerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "order_item";
