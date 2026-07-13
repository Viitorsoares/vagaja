'use server'

import bcrypt from 'bcrypt';
import { prisma } from "@/lib/prisma"
import { schema } from "@/lib/validations/registerSchema"

export async function registerAction(data: {
    name: string
    lastName: string
    birthDate: Date
    phone: string
    cpf: string
    email: string
    password: string
}) {
    const result = schema.safeParse(data)

    if(!result.success) {
        return {
            error: "Dados inválidos"
        }
    }

    const userExists = await prisma.agent.findMany({
        where: {
            email: data.email,
        }
    })

    if(userExists) {
        return {
            error: "Email já cadastrado"
        }
    }

    const passwordHash = await bcrypt.hash(data.password, 8)

    await prisma.agent.create({
        data: {
            nome: data.name,
            lastName: data.lastName,
            birthDate: data.birthDate,
            phone: data.phone,
            cpf: data.cpf,
            email: data.email,
            password: passwordHash
        }
    })

    return {
        success:true
    }
}


