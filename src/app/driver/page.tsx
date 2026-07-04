import { Badge } from "@/components/ui/badge";

export default function Page() {
    return (
        <main className="h-screen px-5 bg-fundo">
            <div className="mt-14">
                <div>
                    <h1 className="text-text-branco text-title font-bold pb-2">Mapa de Vagas</h1>
                    <p className="text-text-branco text-paragraph">Disponibilidade em tempo real.</p>
                </div>

                <div className="mt-6 flex gap-6">
                    <Badge className="p-6 rounded-xl "><span>20</span>vagas livres</ Badge>
                    <Badge className="p-6 rounded-xl ">Buscar endereço</ Badge>
                </div>
            </div>

            <div className="mt-15">
                <div className="flex gap-2">
                    <Badge className="p-4 rounded-xl text-badge bg-azul">Todos</ Badge>
                    <Badge className="p-4 rounded-xl text-badge bg-green">Livre</ Badge>
                    <Badge className="p-4 rounded-xl text-badge font-branco bg-orange" >Limitado</ Badge>
                    <Badge className="p-4 rounded-xl text-badge bg-red">Lotado</ Badge>
                </div>
            </div>

        </main>
    )
}