import { Card } from "@/components/ui/card"

type Step = {
    title: string
    description: string
}

export default function StepCard({ title, description }: Step) {
    return (
        <Card className="bg-azul w-full flex flex-col gap-3 p-6 rounded-xl text-badge whitespace-normal">
            <p className="text-badge-title text-text-branco font-bold">{title}</p>
            <p className="text-text-branco text-paragraph">{description}</p>
        </Card>
    )
}