import LocationMap from "@/components/location_map";
import { Card } from "@/components/ui/card";
import { Search } from 'lucide-react';
import getLocation from "@/actions/get_location_from_db"
import ListOfVacancies from "../agente/list_of_vacancies";

export default async function Page() {
    const locations = await getLocation()

    return (
        <main className="h-full w-full">
            <div className="mt-3 bg-background-2">
                <div className="mx-auto w-full max-w-7xl py-8 px-6 md:px-8 md:py-10">
                    <div>
                        <h1 className="text-text-branco text-title font-bold pb-2 max-xs:text-3xl md:text-5xl">Mapa de Vagas</h1>
                        <span className="text-title font-extrabold text-azul"> </span>
                        <p className="text-text-branco text-paragraph md:text-subtitle">Veja as vagas disponíveis agora.</p>
                    </div>

                    <div className="mt-6 flex flex-col gap-5 font-semibold xs:flex-row xs:items-center">
                        <Card className="py-2 px-3 rounded-xl flex-row bg-azul text-text-branco items-center xs:w-fit"> <strong>{locations?.length}</strong> Vagas disponíveis </Card>
                        <Card className="py-2 px-3 flex flex-row gap-4 rounded-xl text-paragraph items-center xs:w-fit"> <Search className="w-5 h-5 " /> Buscar endereço </Card>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full max-w-7xl px-6 py-5 md:px-8 md:py-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start">
                <div className="h-map md:h-140 lg:col-span-2 lg:h-150">
                    <LocationMap
                        initialLocations={locations}
                        showActions={false}
                    />
                </div>

                <div className="text-text-branco text-center mt-6 lg:mt-0">
                    <ListOfVacancies vacancies={locations ?? []} canDelete={false} />
                </div>
            </div>
        </main>
    )
}