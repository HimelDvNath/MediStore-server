import { prisma } from "../../lib/prisma";
import { CreateOrderDTO } from "../../types";

const createOrder = async (data: CreateOrderDTO) => {
    const {
        customerId,
        quantity,
        price,
        shippingAddress,
        medicineId,
        sellerId,
        paymentMethod,
    } = data;

    const totalAmount = Number(price) * Number(quantity);

    const order = await prisma.order.create({
        data: {
            customerId,
            quantity,
            price,
            totalAmount,
            paymentMethod: paymentMethod ?? "Cash on Delivery",
            shippingAddress,
            medicineId,
            sellerId,
            status: "PENDING",
        },
    });

    return order;
};
const getAllOrders = async () => {
    const orders = await prisma.order.findMany({});

    return {
        message: "Orders fetched successfully",
        data: orders,
    };
};
const getOrder = async (id: string) => {
    const orders = await prisma.order.findFirstOrThrow({
        where: { id },
    });

    return {
        message: "Order fetched successfully",
        data: orders,
    };
};
export const orderServices = {
    createOrder,
    getAllOrders,
    getOrder,
};
