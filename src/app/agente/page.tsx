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
            <div className="mx-auto w-full max-w-7xl flex flex-col gap-7 mt-3 pt-8 pb-5 px-6 md:px-8 md:flex-row md:items-center md:justify-between md:gap-6">
                <div className="flex flex-row items-center gap-4 ">
                    <div className="flex items-center justify-center w-18 h-18 shrink-0 rounded-2xl bg-gray-text">
                        <User className="w-14 h-14 text-preto" />
                    </div>

                    <div className="min-w-0">
                        <h1 className="text-text-branco text-3xl font-semibold md:text-4xl">Painel do Agente</h1>

                        <div className="flex flex-row gap-10 text-paragraph">
                            <h3 className="text-gray-text truncate">{session.user.name}</h3>
                            <h3 className="text-green shrink-0">Online{ }</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-5 md:shrink-0">
                    <Card className="flex flex-row items-center px-3 py-1.5 rounded-xl border-2 bg-fundo border-text-branco0 text-text-branco">
                        <CarFront className="w-7 h-7" />
                        <p className="text-paragraph ">
                            <strong>{locations?.length}</strong> vagas
                        </p>
                    </Card>

                    <ButtonSignOut button={"Sair"} />
                </div>
            </div>

            <div className="bg-background-2">
                <div className="mx-auto w-full max-w-7xl px-6 pt-5 pb-6 md:px-8 md:pt-8 md:pb-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start">
                    <div className="h-map md:h-140 lg:col-span-2 lg:h-150">
                        <LocationMap initialLocations={locations ?? []} />
                    </div>

                    <div className="text-text-branco text-center mt-6 lg:mt-0">
                        <ListOfVacancies vacancies={locations ?? []} />
                    </div>
                </div>
            </div>
        </main>
    )
}