import { prisma } from "@/lib/prisma";

export default async function getLocation() {
    const locations = await prisma.location.findMany({
        select: {
            longitude: true,
            latitude: true
        }
    })

    return locations
}