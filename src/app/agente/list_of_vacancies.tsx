'use client'

import { Trash } from 'lucide-react';
import deleteLocation from "@/actions/delete_location_from_db"
import { useState } from 'react';

type location = {
    id: string
    longitude: number
    latitude: number
}

export default function ListOfVacancies({ vacancies }: { vacancies: location[] }) {
    const [items, setItems] = useState(vacancies)

    async function handleDeleteVacancie(id: string) {
        if (!id) return

        setItems(prev => prev.filter(item => item.id !== id))

        await deleteLocation(id)

        
    }

    return (
        <div className="max-h-[480px] flex flex-col overflow-y-auto rounded-2xl">
            <h2 className="py-3 font-bold bg-azul sticky top-0">Vagas Ocupadas</h2>
            {items.map(vacancie => (
                <div key={vacancie.id} className="h-19 shrink-0 items-center justify-between px-5 flex border-t-1 border-azul bg-background-2">
                    <p className="text-sm">{[vacancie.longitude, vacancie.latitude]}</p>
                    <Trash onClick={() => handleDeleteVacancie(vacancie.id)} />
                </div>
            ))}
        </div>
    )
}