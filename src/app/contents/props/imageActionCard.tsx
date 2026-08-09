import Image from "next/image"
import Link from "next/link"

type ImageActionCard = {
    href: string
    imageSrc: string
    title: string
    subtitle: string
    actionText: string
}

export default function ImageActionCard({ href, imageSrc, title, subtitle, actionText }: ImageActionCard) {
    return (
        <Link href={href}>
            <div className="relative cursor-pointer overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={400}
                    height={300}
                    priority
                    className="rounded-3xl w-auto h-auto object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-fundo to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                    <h2 className="text-text-branco text-4xl font-extrabold">{title}</h2>
                    <p className="text-text-branco">{subtitle}</p>
                    <p className="text-azul font-bold">{actionText}</p>
                </div>
            </div>
        </Link>
    )
}