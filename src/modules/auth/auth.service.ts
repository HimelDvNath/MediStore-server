import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";
import { Role } from "../../types";

const createUser = async (payload: {
    name: string;
    email: string;
    password: string;
}) => {
    try {
        const result = await auth.api.signUpEmail({
            body: payload,
        });
        console.log("from services", payload);
        return {
            data: result,
            message: "user created successfully",
        };
    } catch (error) {
        return {
            data: null,
            message: "user Create failed",
        };
    }
};
const getAllUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isActive: true,
            emailVerified: true,
            createdAt: true,
        },
    });

    return {
        message: "Users fetched successfully",
        data: users,
    };
};
type UpdateUserPayload = {
    id: string;
    name?: string;
    phone?: string;
    address?: string;
    role?: Role;
    isActive?: boolean;
};

const updateUser = async (payload: UpdateUserPayload) => {
    const { id, ...updateData } = payload;

    const user = await prisma.user.update({
        where: { id },
        data: updateData,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            address: true,
            isActive: true,
            emailVerified: true,
            updatedAt: true,
        },
    });

    return {
        data: user,
        message: "User updated successfully",
    };
};

export const authServices = {
    createUser,
    getAllUsers,
    updateUser
};
