import { prisma } from "@/lib/prisma";

export default async function deleteLocation() {
    const location = await prisma.location.deleteMany({
        where: {
            id: 
        }
    })
}