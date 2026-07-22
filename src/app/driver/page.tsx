import Map from "@/components/map";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search } from 'lucide-react';

export default function Page() {
    return (
        <main className="h-screen w-full">
            <div className="mt-3 py-8 px-6 bg-background-2">
                <div>
                    <h1 className="text-text-branco text-title font-bold pb-2">Mapa de Vagas</h1>
                    <p className="text-text-branco text-paragraph">Disponibilidade em tempo real.</p>
                </div>

                <div className="mt-6 flex gap-5 font-semibold">
                    <Card className="py-2 px-3 rounded-xl flex-row bg-azul text-text-branco items-center"> <span>20</span> Vagas livres </Card>
                    <Card className="py-2 px-3 flex flex-row gap-4 rounded-xl text-paragraph items-center"> <Search className="w-5 h-5 "/> Buscar endereço </Card>
                </div>
            </div> 

            <div className="mt-8 px-6">
                <div className="flex gap-7">
                    <Badge className="p-4 rounded-xl text-footer font-semibold text-text-branco bg-azul">Todos</ Badge>
                    <Badge className="p-4 rounded-xl text-footer font-semibold text-text-branco bg-green">Livre</ Badge>
                    <Badge className="p-4 rounded-xl text-footer font-semibold text-text-branco bg-orange" >Limitado</ Badge>
                    <Badge className="p-4 rounded-xl text-footer font-semibold text-text-branco bg-red">Lotado</ Badge>
                </div>
            </div>

            <div>
                <Map />
            </div>

        </main>
    )
}