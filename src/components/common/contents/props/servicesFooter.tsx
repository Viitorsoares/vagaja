import Link from "next/link"

type ServicesFooter = {
    href: string
    title: string
}

export default function ServicesFooter({ href, title }: ServicesFooter) {
    return (
        <Link
            href={href}>
            <p className="cursor-pointer">{title}</p>
        </Link>
    )
}