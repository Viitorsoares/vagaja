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
        <Link href={href} className="block">
            <div className="relative cursor-pointer overflow-hidden rounded-3xl">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={400}
                    height={300}
                    sizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
                    priority
                    className="w-full h-auto object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-fundo to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 md:bottom-8 md:left-8 md:right-8">
                    <h2 className="text-text-branco text-4xl font-extrabold max-xs:text-3xl lg:text-5xl">{title}</h2>
                    <p className="text-text-branco md:text-subtitle">{subtitle}</p>
                    <p className="text-azul font-bold">{actionText}</p>
                </div>
            </div>
        </Link>
    )
}