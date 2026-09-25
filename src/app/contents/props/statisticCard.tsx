import { Card } from "@/components/ui/card";

type CardProps = {
    title: string
    description: string
}

export default function StatisticCard({ title, description }: CardProps) {
    return (
        <Card className="flex flex-col justify-center text-center p-4 rounded-xl bg-azul md:p-6">
            <p className="text-2rem font-extrabold text-text-branco md:text-4xl lg:text-5xl">{title}</p>
            <p className="text-paragraph text-text-branco">{description}</p>
        </Card>
    )
}