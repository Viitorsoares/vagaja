"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { LogOut } from 'lucide-react';

type BtnPropy = {
    button: string
}

export default function ButtonSignOut({ button }: BtnPropy) {
    const router = useRouter()

    async function signOut(){
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.replace("././form/loginForm")
                }
            }
        })
    }

    return (
        <Button onClick={signOut} className="bg-fundo text-red">
            <LogOut />
            {button}
        </Button>
    )
}