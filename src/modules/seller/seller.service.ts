import { prisma } from "../../lib/prisma";
import { OrderStatus } from "../../types";

type AddMedicinePayload = {
    name: string;
    brand?: string | null;
    manufacturer?: string | null;
    description?: string | null;
    price: number;
    stock: number;
    imageUrl?: string | null;
    categoryName: string;
    sellerId: string;
};

const addMedicine = async (payload: AddMedicinePayload) => {
    const medicine = await prisma.medicine.create({
        data: {
            name: payload.name,
            brand: payload.brand ?? null,
            manufacturer: payload.manufacturer ?? null,
            description: payload.description ?? null,
            price: payload.price,
            stock: payload.stock,
            imageUrl: payload.imageUrl ?? null,
            categoryName: payload.categoryName,
            sellerId: payload.sellerId,
        },
    });

    return medicine;
};
type UpdateMedicinePayload = {
    id: string;
    name?: string;
    brand?: string | null;
    manufacturer?: string | null;
    description?: string | null;
    price?: number;
    stock?: number;
    imageUrl?: string | null;
    categoryName?: string;
    isActive?: boolean;
};

const updateMedicine = async (payload: UpdateMedicinePayload) => {
    const medicine = await prisma.medicine.update({
        where: { id: payload.id },
        data: payload,
    });

    return medicine;
};
const deleteMedicine = async (id: string) => {
    const medicine = await prisma.medicine.delete({
        where: { id },
    });

    return medicine;
};
const getSellerOrders = async (id: string) => {
    const medicine = await prisma.order.findMany({
        where: {
            sellerId: id,
        },
    });

    return medicine;
};
const UpdateOrderStatus = async (payload: {
    id: string;
    status: OrderStatus;
}) => {
    const medicine = await prisma.order.update({
        where: {
            id: payload.id,
        },
        data: {
            status: payload.status,
        },
    });

    return medicine;
};

export const sellerService = {
    addMedicine,
    updateMedicine,
    deleteMedicine,
    getSellerOrders,
    UpdateOrderStatus
};
