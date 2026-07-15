"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form'
import { schema, type FormData } from "@/lib/validations/registerSchema"
import { authClient } from '@/lib/auth-client'

export default function RegisterForm() {
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    async function onSubmit(formData: FormData) {

        const { data, error } = await authClient.signUp.email({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            callbackURL: "/form/loginForm"
        }, {
            onSuccess: (ctx) => {
                console.log("Cadastrado", ctx)
                router.replace("/form/loginForm")
            },
            onError: (ctx) => {
                console.log("Erro ao criar conta")
                console.log(ctx)
            }
        })
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-azul text-3xl font-bold">Cadastro de Agente</CardTitle>
                    <CardDescription className="text-black text-xl mt-2">
                        Preencha todos os campos abaixo
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-5 pt-8">
                            <div>
                                <Label className="pb-2 text-paragraph">Nome</Label>
                                <Input type="text" required {...register('name')} />
                                {errors.email?.message && <span className="text-red">{errors.email?.message}</span>}
                            </div>

                            <div>
                                <Label className="pb-2 text-paragraph">Email</Label>
                                <Input type="email" required {...register('email')} />
                                {errors.email?.message && <span className="text-red">{errors.email?.message}</span>}
                            </div>

                            <div>
                                <Label className="pb-2 text-paragraph">Senha</Label>
                                <Input type="password" required {...register('password')} />
                                {errors.password?.message && <span className="text-red">{errors.password?.message}</span>}
                            </div>
                            <div>
                                <Label className="pb-2 text-paragraph">Confirmar Senha</Label>
                                <Input type="password" required {...register('confirmPassword')} />
                                {errors.confirmPassword?.message && <span className="text-red">{errors.confirmPassword?.message}</span>}
                            </div>
                        </div>

                        <Button type="submit" className="bg-azul w-full mt-5 text-paragraph">Criar conta de agente</Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <CardDescription className="text-black ">
                        Já tem conta? <Link className="text-azul font-semibold" href={"/form/loginForm"}>Fazer login</Link>
                    </CardDescription>
                </CardFooter>
            </Card>
        </div>
    )
}