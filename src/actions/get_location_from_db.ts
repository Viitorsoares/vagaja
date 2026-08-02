'use server'

import { prisma } from "@/lib/prisma";

export default async function getLocation() {
    const locations = await prisma.location.findMany({
        select: {
            id: true,
            longitude: true,
            latitude: true
        }
    })

    if (!locations) return
    return locations
}