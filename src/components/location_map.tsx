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
    showActions?: boolean
}

export default function LocationMap({
    initialLocations = [],
    showActions = true,
}: LocationProps) {
    const [locations, setLocations] = useState<Location[]>(initialLocations)
    const [coordinates, setCoordinates] = useState<Location | null>(null)
    const [isPending, startTransition] = useTransition()

    function handleCoordinates(longitude: number, latitude: number) {
        setCoordinates({ longitude, latitude })
    }

    function handleSave() {
        if (!coordinates) return

        const newLocation = coordinates

        startTransition(async () => {
            await saveLocation(newLocation.longitude, newLocation.latitude)

            setLocations(prev => [...prev, newLocation])
            setCoordinates(null)
        })
    }

    function handleCancel() {
        setCoordinates(null)
    }

    return (
        <div className="w-full h-full flex flex-col gap-3">
            <div className="flex-1 min-h-0">
                <Map
                    interactive={showActions}
                    coordinatesChange={handleCoordinates}
                    selectedCoodinates={coordinates}
                    locations={locations}
                />
            </div>

            {showActions && (
                <>
                    <div className="shrink-0">
                        {coordinates && (
                            <p className="text-text-branco text-sm wrap-break-word md:text-paragraph">Selecionado: {coordinates.longitude}, {coordinates.latitude}</p>
                        )}
                    </div>

                    <div className="shrink-0 flex flex-col gap-3 mb-6 xs:flex-row xs:justify-around xs:gap-4">
                        <button
                            className="text-text-branco bg-azul hover:bg-azul/90 font-semibold px-4 py-2 rounded-4xl cursor-pointer md:px-6 md:py-2.5"
                            onClick={handleSave}
                            disabled={!coordinates || isPending}
                        >
                            {isPending ? "Salvando..." : "Salvar localização"}
                        </button>
                        <button
                            className="text-text-branco bg-red hover:bg-red/90 font-semibold px-4 py-2 rounded-4xl cursor-pointer md:px-6 md:py-2.5"
                            onClick={handleCancel}
                            disabled={!coordinates || isPending}
                        >
                            {isPending ? "Cancelando..." : "Cancelar"}
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}




