'use server'

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export default async function saveLocation(longitude: number, latitude: number) {
   const session = await auth.api.getSession({
    headers: await headers()
   })

   if (!session?.user) {
    throw new Error("Usuário não autenticado")
   }

   await prisma.location.create({
    data: {
        longitude,
        latitude,
        userId: session.user.id
    }
   })
}