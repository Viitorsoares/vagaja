import z from "zod";

export const schema = z.object({
    name: z.string("O nome deve ter no mínimo 3 caracteres"),
    email: z.email("Digite um email válido"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
    confirmPassword: z.string().min(8, "A confirmação dessa senha deve ter no mínimo 8 caracteres")
})
.refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"]
})

export type FormData = z.infer<typeof schema>
