"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from 'react-hook-form'
import { schema, type FormData } from "@/lib/validations/loginSchema"

export default function LoginForm() {
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    async function onSubmit(data: FormData) {
        alert('etstbd')
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-azul text-3xl font-bold">Área do Agente</CardTitle>
                    <CardDescription className="text-black text-xl mt-2">
                        Acesso restrito a agentes autorizados
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-5 pt-8">
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
                        </div>

                        <Button type="submit" className="bg-azul w-full mt-5 text-paragraph">Entrar</Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <CardDescription className="text-black ">
                        Novo agente? <Link className="text-azul font-semibold" href={"/form/registerForm"}>Criar conta gratuitamente</Link>
                        <p className="mt-2"><Link className="text-azul font-semibold" href={""}>Esqueceu a senha?</Link></p>
                    </CardDescription>
                </CardFooter>
            </Card>
        </div>
    )
}