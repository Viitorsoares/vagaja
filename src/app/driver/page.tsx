import LocationMap from "@/components/location_map";
import { Card } from "@/components/ui/card";
import { Search } from 'lucide-react';
import getLocation from "@/actions/get_location_from_db"

export default async function Page() {
    const locations = await getLocation()

    return (
        <main className="h-screen w-full">
            <div className="mt-3 py-8 px-6 bg-background-2">
                <div>
                    <h1 className="text-text-branco text-title font-bold pb-2">Mapa de Vagas</h1>
                    <p className="text-text-branco text-paragraph">Disponibilidade em tempo real.</p>
                </div>

                <div className="mt-6 flex gap-5 font-semibold">
                    <Card className="py-2 px-3 rounded-xl flex-row bg-azul text-text-branco items-center"> <strong>{locations?.length}</strong> Vagas disponíveis </Card>
                    <Card className="py-2 px-3 flex flex-row gap-4 rounded-xl text-paragraph items-center"> <Search className="w-5 h-5 " /> Buscar endereço </Card>
                </div>
            </div>

            <div className="h-155 px-6 py-5">
                <LocationMap
                    initialLocations={locations}
                    showActions={false}
                />
            </div>
        </main>
    )
}