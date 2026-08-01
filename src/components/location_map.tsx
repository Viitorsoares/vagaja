'use client'

import { useState, useTransition } from "react"
import Map from "./map"
import saveLocation from "@/actions/add_location_from_db"

type Location = {
    longitude: number
    latitude: number
}

type LocationProps = {
    initialLocations: Location[]
}

export default function LocationMap({ initialLocations = []}: LocationProps) {
    const [coordinates, setCoordinates] = useState<{ longitude: number, latitude: number} | null>(null)
    const [isPending, startTransition] = useTransition()

    function handleCoordinates(longitude: number, latitude: number) {
        setCoordinates({longitude, latitude})
    }

    function handleSave() {
        if (!coordinates) return 
        startTransition(async () => {
            await saveLocation(coordinates.longitude, coordinates.latitude)
        })
    }

    return (
         <div className="w-full h-full flex flex-col gap-4">
            <div className="h-[500px]">
                <Map 
                    coordinatesChange={handleCoordinates}
                    locations={initialLocations}
                />
            </div>

            {coordinates && (
                <p className="text-text-branco">Selecionado: {coordinates.longitude}, {coordinates.latitude}</p>
            )}

            <button className="text-gray-text" onClick={handleSave} disabled={!coordinates || isPending}>
                {isPending ? "Salvando..." : "Salvar localização"}
            </button>
        </div>
    )
}




