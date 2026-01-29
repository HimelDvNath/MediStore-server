/*
  Warnings:

  - You are about to drop the column `categoryId` on the `medicine` table. All the data in the column will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryName` to the `medicine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "medicine" DROP CONSTRAINT "medicine_categoryId_fkey";

-- DropIndex
DROP INDEX "medicine_categoryId_idx";

-- AlterTable
ALTER TABLE "medicine" DROP COLUMN "categoryId",
ADD COLUMN     "categoryName" TEXT NOT NULL;

-- DropTable
DROP TABLE "category";

-- CreateIndex
CREATE INDEX "medicine_categoryName_idx" ON "medicine"("categoryName");
