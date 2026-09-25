'use client'

import { Trash } from 'lucide-react';
import deleteLocation from "@/actions/delete_location_from_db"
import { useState } from 'react';

type location = {
    id: string
    longitude: number
    latitude: number
}

export default function ListOfVacancies({
    vacancies,
    canDelete = true
}: {
    vacancies: location[],
    canDelete?: boolean
}) {
    const [items, setItems] = useState(vacancies)

    async function handleDeleteVacancie(id: string) {
        if (!id) return

        setItems(prev => prev.filter(item => item.id !== id))
        await deleteLocation(id)
    }

    return (
        <div className="max-h-map flex flex-col overflow-y-auto rounded-2xl lg:max-h-150">
            <h2 className="py-3 px-5 font-bold bg-azul sticky top-0 z-10 md:py-4 md:px-6">Controle de Vagas Disponíveis</h2>
            {items.map(vacancie => (
                <div key={vacancie.id} className="h-19 shrink-0 items-center justify-between gap-3 px-5 flex border-t-1 border-azul bg-background-2 md:px-6">
                    <p className="min-w-0 text-sm truncate">{[vacancie.longitude, vacancie.latitude]}</p>
                    {canDelete && (
                        <Trash className="shrink-0 cursor-pointer" onClick={() => handleDeleteVacancie(vacancie.id)} />
                    )}
                </div>
            ))}
        </div>
    )
}