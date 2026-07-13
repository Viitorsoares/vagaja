import z from "zod";

export const schema = z.object({
    name: z.string(),
    lastName: z.string(),
    birthDate: z.date(),
    phone: z.string(),
    cpf: z.string(),
    email: z.email("Digite um email válido"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres")
})

export type FormData = z.infer<typeof schema>
