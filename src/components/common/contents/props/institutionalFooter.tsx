import Link from "next/link"

type InstitutionalFooter = {
    href: string
    title: string
}

export default function InstitutionalFooter({ href, title }: InstitutionalFooter) {
    return (
        <Link
            href={href}>
            <p className="cursor-pointer">{title}</p>
        </Link>
    )
}