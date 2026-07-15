"use server"

import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import ButtonSignOut from "./_components/buttonSingout"

export default async function Dashboard() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        redirect("/")
    }

    return (
        <div className="bg-azul">
            <h1>ola mundo</h1>
            <ButtonSignOut />
            <h3>Usario {session.user.name}</h3>
            <h3>Email {session.user.email}</h3>
        </div>
    )
}