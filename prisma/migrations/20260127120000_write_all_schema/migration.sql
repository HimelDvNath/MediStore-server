-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRM', 'SHIPPED', 'DELIVERY', 'CANCELLED');

-- CreateTable
CREATE TABLE "cart_item" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" TEXT NOT NULL,
    "medicineId" TEXT NOT NULL,

    CONSTRAINT "cart_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicine" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT,
    "manufacturer" TEXT,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "stock" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,

    CONSTRAINT "medicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_item" (
    "id" SERIAL NOT NULL,
    "orderId" TEXT NOT NULL,
    "medicineId" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "order_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "totalAmount" DECIMAL(10,2) NOT NULL,
    "paymentMethod" TEXT NOT NULL DEFAULT 'Cash on Delivery',
    "shippingAddress" TEXT NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "medicineId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cart_item_customerId_medicineId_key" ON "cart_item"("customerId", "medicineId");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE INDEX "medicine_categoryId_idx" ON "medicine"("categoryId");

-- CreateIndex
CREATE INDEX "medicine_sellerId_idx" ON "medicine"("sellerId");

-- CreateIndex
CREATE INDEX "order_item_orderId_idx" ON "order_item"("orderId");

-- CreateIndex
CREATE INDEX "order_item_medicineId_idx" ON "order_item"("medicineId");

-- CreateIndex
CREATE INDEX "order_customerId_idx" ON "order"("customerId");

-- CreateIndex
CREATE INDEX "review_medicineId_idx" ON "review"("medicineId");

-- CreateIndex
CREATE INDEX "review_customerId_idx" ON "review"("customerId");

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicine" ADD CONSTRAINT "medicine_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicine" ADD CONSTRAINT "medicine_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicine"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
