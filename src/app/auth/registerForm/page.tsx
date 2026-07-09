"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";

export const schema = z.object({
    name: z.string(),
    lastName: z.string(),
    cpf: z.string(),
    email: z.email("Digite um email válido"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres")
})

type FormData = z.infer<typeof schema>

export default function RegisterForm() {
    const {register, handleSubmit, formState: {errors} } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    function onSubmit(data: FormData) {
        console.log(data)
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-azul text-3xl font-bold">Cadastro de Agente</CardTitle>
                    <CardDescription className="text-black text-xl mt-2">Preencha todos os campos abaixo</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-5 pt-8">
                            <div>
                                <Label className="pb-1.5 text-paragraph">Nome</Label>
                                <Input type="text" required {...register('name')}/>
                            </div>

                            <div>
                                <Label className="pb-1.5 text-paragraph">Sobrenome</Label>
                                <Input type="text" required {...register('lastName')}/>
                            </div>

                            <div>
                                <Label className="pb-1.5 text-paragraph">CPF</Label>
                                <Input type="text" required {...register('cpf')}/>
                            </div>

                            <div>
                                <Label className="pb-1.5 text-paragraph">E-mail</Label>
                                <Input type="email" required {...register('email')}/>
                            </div>

                            <div>
                                <Label className="pb-1.5 text-paragraph">Senha</Label>
                                <Input type="password" required {...register('password')}/>
                            </div>
                        </div>

                        <Button type="submit" className="bg-azul w-full mt-5">Criar conta de agente</Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <CardDescription className="text-black">
                        Já tem conta? <Link href={"./loginForm"} className="text-azul font-semibold">Fazer login</Link>
                    </CardDescription>
                </CardFooter>
            </Card>
        </div>
    )

}