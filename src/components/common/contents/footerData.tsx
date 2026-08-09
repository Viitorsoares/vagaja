export interface ServicesItem {
    href: string
    title: string
}

export interface InstitucionalItem {
    href: string
    title: string
}

export const services: ServicesItem[] = [
    { href: "/driver", title: "Mapa de Vagas" },
    { href: "/form/loginForm", title: "Área do Agente" },
    { href: "/form/registerForm", title: "Cadastro de Agente" },
    { href: "", title: "Planos e Parcerias" },
    { href: "", title: "API para Empresas" }
]

export const institutional: InstitucionalItem[] = [
    { href: "", title: "Sobre nós" },
    { href: "", title: "Política de Privacidade" },
    { href: "", title: "Termos de Uso" },
    { href: "", title: "Acessibilidade" },
    { href: "", title: "Imprensa" }
]