import { MapPinIcon } from "@heroicons/react/24/solid";
import { Mail, Phone, SquareArrowOutUpRight } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ServicesFooter from "./contents/props/servicesFooter";
import InstitutionalFooter from "./contents/props/institutionalFooter";
import { institutional, services } from "./contents/footerData";

export default function Footer() {
    return (
        <footer className="bg-fundo">
            <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-8 md:py-14 lg:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
                    <div className="md:col-span-3 lg:col-span-1 lg:pr-6">
                        <div className="flex gap-1.5 mb-5 cursor-pointer">
                            <div className="w-7 h-7 shrink-0 flex items-center justify-center rounded-full bg-azul">
                                <MapPinIcon className="w-4 text-text-branco"></MapPinIcon>
                            </div>
                            <p className="text-text-branco text-xl font-extrabold">vagajá</p>
                        </div>

                        <p className="text-gray-text lg:text-footer">
                            Conectamos motoristas a vagas disponíveis e capacitamos
                            agentes com ferramentas de gestão urbana.
                        </p>

                        <div className="flex flex-row gap-4 mt-10 text-gray-text lg:mt-8">
                            <FaInstagram className="icon-footer" />
                            <FaGithub className="icon-footer" />
                            <FaLinkedin className="icon-footer" />
                            <FaTwitter className="icon-footer" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-text-branco font-extrabold pb-3">Serviços</h2>
                        <div className="col-footer">
                            {services.map((serv, i) => (
                                <ServicesFooter key={i} href={serv.href} title={serv.title} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-text-branco font-extrabold pb-3">Institucional</h2>
                        <div className="col-footer">
                            {institutional.map((inst, i) => (
                                <InstitutionalFooter key={i} href={inst.href} title={inst.title} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-text-branco font-extrabold">Contato</h2>
                        <div className="flex flex-col gap-3 pt-3">
                            <div className="flex flex-row gap-3 items-center">
                                <div className="text-gray-text shrink-0">
                                    <Phone />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-text-branco font-semibold">0800 721 0000</p>
                                    <p className="text-gray-text text-footer">Seg-Sex, 8h às 18h</p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <div className="text-gray-text shrink-0">
                                    <Mail />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-text-branco font-semibold cursor-pointer wrap-break-word">contato@vagaja.com.br</p>
                                    <p className="text-gray-text text-footer">Resposta em até 24h</p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <div className="text-gray-text shrink-0">
                                    <SquareArrowOutUpRight />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-text-branco font-semibold cursor-pointer">Central de Ajuda</p>
                                    <p className="text-gray-text text-footer">Tutoriais e suporte</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-background-2">
                <div className="mx-auto w-full max-w-7xl text-gray-text text-copyright p-6 flex flex-col gap-2 md:px-8 md:flex-row md:items-center md:justify-between">
                    <p>
                        © 2026 vagaja Tecnologia e Mobilidade Urbana Ltda.
                        Todos os direitos reservados.
                    </p>
                    <p className="md:shrink-0">Todos os sistemas operacionais</p>
                </div>
            </div>
        </footer>
    )
}
