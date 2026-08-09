import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

type FeatureCard = {
    icon: LucideIcon
    title: string
    description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCard) {
    return (
        <Card className="bg-azul w-full flex flex-row items-center gap-3 p-6 rounded-xl text-badge whitespace-normal">
            <div>
                <Icon className="w-11 h-11 text-text-branco" />
            </div>
            <div>
                <p className="text-badge-title text-text-branco font-bold">{title}</p>
                <p className="text-text-branco text-paragraph">{description}</p>
            </div>
        </Card>
    )
}