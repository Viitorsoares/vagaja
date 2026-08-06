import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import ButtonSignOut from "./_components/buttonSingout"
import { Card } from "@/components/ui/card"
import { User, CarFront } from 'lucide-react';
import LocationMap from "@/components/location_map"
import getLocation from "@/actions/get_location_from_db"
import ListOfVacancies from "./list_of_vacancies"

export default async function Dashboard() {
    const locations = await getLocation()

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        redirect("/")
    }
    
    return (
        <main className="w-full h-full">
            <div className="flex flex-col gap-7 mt-3 pt-8 pb-5 px-6 ">
                <div className="flex flex-row items-center gap-4 ">
                    <div className="flex items-center justify-center w-18 h-18 rounded-2xl bg-text-branco">
                        <User className="w-14 h-14 text-preto" />
                    </div>

                    <div>
                        <h1 className="text-text-branco text-3xl font-semibold">Painel do Agente</h1>

                        <div className="flex flex-row gap-10 text-paragraph">
                            <h3 className="text-gray-text">{session.user.name}</h3>
                            <h3 className="text-green">Online{}</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-5">
                    <Card className="flex flex-row items-center px-3 py-1.5 rounded-xl border-2 bg-fundo border-text-branco0 text-text-branco">
                        <CarFront className="w-7 h-7" />
                        <p className="text-paragraph "><strong>{locations?.length}</strong> vagas</p>
                    </Card>

                    <ButtonSignOut button={"Sair"} />
                </div>
            </div>

            <div className="h-145 px-6 pt-5 bg-background-2">
                <LocationMap initialLocations={locations} />
            </div>

            <div className="text-text-branco px-6 text-center mt-6">
                <ListOfVacancies vacancies={locations ?? []}/>
            </div>
        </main>
    )
}