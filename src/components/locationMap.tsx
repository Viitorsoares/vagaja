'use client'

import { useState, useTransition } from "react"
import Map from "./map"
import saveLocation from "@/actions/addLocation"

export default function LocationMap() {
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
            <div className="h-[400px]">
                <Map coordinatesChange={handleCoordinates} />
            </div>

            {coordinates && (
                <p>Selecionado: {coordinates.longitude}, {coordinates.latitude}</p>
            )}

            <button className="text-gray-text" onClick={handleSave} disabled={!coordinates || isPending}>
                {isPending ? "Salvando..." : "Salvar localização"}
            </button>
        </div>
    )
}