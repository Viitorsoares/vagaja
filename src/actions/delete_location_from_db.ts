'use server'

import { prisma } from "@/lib/prisma";

export default async function deleteLocation(id: string) {

    if (!id) return
    
    const deleteVacancie = await prisma.location.deleteMany({

        where: {
            id: id
        }
    })

    return deleteVacancie
}