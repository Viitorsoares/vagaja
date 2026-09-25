import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

type FeatureCard = {
    icon: LucideIcon
    title: string
    description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCard) {
    return (
        <Card className="bg-azul w-full h-full flex flex-row items-center gap-3 p-6 rounded-xl text-badge whitespace-normal md:gap-4 md:p-7">
            <div className="shrink-0">
                <Icon className="w-10 h-10 text-text-branco md:w-11 md:h-11 lg:w-12 lg:h-12" />
            </div>
            <div className="min-w-0">
                <p className="text-badge-title text-text-branco font-bold">{title}</p>
                <p className="text-text-branco text-paragraph">{description}</p>
            </div>
        </Card>
    )
}