import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.Next_PUBLIC_URL || "http://localhost:3000"
})