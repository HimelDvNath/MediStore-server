/*
  Warnings:

  - Made the column `password` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;
