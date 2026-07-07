import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterForm() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-azul text-3xl font-bold">Cadastro de Agente</CardTitle>
                    <CardDescription className="text-black text-xl mt-2">Preencha todos os campos abaixo</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-5 pt-8">
                            <div>
                                <Label className="pb-1.5 text-paragraph">Nome</Label>
                                <Input type="text" required/>
                            </div>

                            <div>
                                <Label className="pb-1.5 text-paragraph">Sobrenome</Label>
                                <Input type="text" required/>
                            </div>

                            <div>
                                <Label className="pb-1.5 text-paragraph">CPF</Label>
                                <Input type="text" required/>
                            </div>

                            <div>
                                <Label className="pb-1.5 text-paragraph">E-mail</Label>
                                <Input type="email" required/>
                            </div>

                            <div>
                                <Label className="pb-1.5 text-paragraph">Senha</Label>
                                <Input type="password" required/>
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