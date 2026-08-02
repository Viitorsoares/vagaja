'use client'

type location = {
    id: number
    longitude: number
    latitude: number
}

export default function ListOfVacancies({ vacancies }: { vacancies: location[] }) {
    return (
        <div className="max-h-[480px] overflow-y-auto rounded-lg border">
            {vacancies.map(vacancie => (
                <div key={vacancie.id} className="h-14 flex justify-between items-center">
                    <div className="w-1 h-full">
                        <p className="flex-1 px-2 text-sm">edbnfjejfjejf</p>
                    </div>
                </div>
            ))}
        </div>
    )
}