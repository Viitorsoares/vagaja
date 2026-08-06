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
    const [coordinates, setCoordinates] = useState<{ longitude: number, latitude: number } | null>(null)
    const [isPending, startTransition] = useTransition()

    function handleCoordinates(longitude: number, latitude: number) {
        setCoordinates({ longitude, latitude })
    }

    function handleSave() {
        if (!coordinates) return
        startTransition(async () => {
            await saveLocation(coordinates.longitude, coordinates.latitude)
        })
    }

    function handleCancel() {
        setCoordinates(null)
    }

    return (
        <div className="w-full h-full flex flex-col gap-3">
            <div className="h-[500px]">
                <Map
                    coordinatesChange={handleCoordinates}
                    locations={initialLocations}
                />
            </div>

            {showActions && (
                <>
                    <div>
                        {coordinates && (
                            <p className="text-text-branco">Selecionado: {coordinates.longitude}, {coordinates.latitude}</p>
                        )}
                    </div>

                    <div className="flex flex-row justify-around mb-6">
                        <button
                            className="text-text-branco bg-azul font-semibold px-4 py-2 rounded-4xl cursor-pointer"
                            onClick={handleSave}
                            disabled={!coordinates || isPending}
                        >
                            {isPending ? "Salvando..." : "Salvar localização"}
                        </button>
                        <button
                            className="text-text-branco bg-red font-semibold px-4 py-2 rounded-4xl cursor-pointer"
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




