'use server'

import { schema } from "@/app/auth/registerForm/page"

export async function createUsersActions(formData: FormData) {
    const users = schema.safeParse(formData)

    
  
}