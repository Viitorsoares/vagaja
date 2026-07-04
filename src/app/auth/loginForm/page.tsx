import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginForm() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-fundo">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Área do Agente</CardTitle>
                    <CardDescription>
                        Acesso restrito a agentes autorizados
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action="">
                        <Input name="email" type="email" />
                        <Input name="password" type="password" />
                    </form>
                </CardContent>
                <CardFooter>
                    <CardDescription>
                        Novo agente? <Link className="text-azul" href={"/loginForm"}>Criar conta gratuitamente</Link>
                    </CardDescription>
                </CardFooter>
            </Card>
        </div>
    )
}