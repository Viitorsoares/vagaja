import { Card } from "@/components/ui/card";
import { Children } from "react";

type CardProps = {
    subtitle: string
    paragraph: string 
}

export default function StatisticCards({subtitle, paragraph}: CardProps) {
    return (
        <Card className="flex flex-col text-center p-4 rounded-xl bg-azul">
          <p className="text-2rem font-extrabold text-text-branco">{subtitle}</p>
          <p className="text-paragraph text-text-branco">{paragraph}</p>
        </Card>
    )
}