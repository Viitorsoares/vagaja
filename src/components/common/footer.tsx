import { MapPinIcon } from "@heroicons/react/24/solid";
import { Mail, Phone, SquareArrowOutUpRight } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ServicesFooter from "./contents/props/servicesFooter";
import InstitutionalFooter from "./contents/props/institutionalFooter";
import { institutional, services } from "./contents/footerData";

export default function Footer() {
    return (
        <footer className="bg-fundo">
            <div className="px-6 my-10">
                <div className="flex gap-1.5 mb-5 cursor-pointer">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-azul">
                        <MapPinIcon className="w-4 text-text-branco"></MapPinIcon>
                    </div>
                    <p className="text-text-branco text-xl font-extrabold">vagajá</p>
                </div>

                <p className="text-gray-text">
                    Conectamos motoristas a vagas disponíveis e capacitamos
                    agentes com ferramentas de gestão urbana.
                </p>

                <div className="flex flex-row gap-4 mt-10 text-gray-text">
                    <FaInstagram className="icon-footer" />
                    <FaGithub className="icon-footer" />
                    <FaLinkedin className="icon-footer" />
                    <FaTwitter className="icon-footer" />
                </div>
            </div>

            <div className="px-6">
                <div className="mb-10">
                    <h2 className="text-text-branco font-extrabold pb-3">Serviços</h2>
                    <div className="col-footer">
                        {services.map((serv, i) => (
                            <ServicesFooter key={i} href={serv.href} title={serv.title} />
                        ))}
                    </div>
                </div>

                <div className="mb-10">
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
                            <div className="text-gray-text">
                                <Phone />
                            </div>
                            <div>
                                <p className="text-text-branco font-semibold">0800 721 0000</p>
                                <p className="text-gray-text text-footer">Seg-Sex, 8h às 18h</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 items-center">
                            <div className="text-gray-text">
                                <Mail />
                            </div>
                            <div>
                                <p className="text-text-branco font-semibold cursor-pointer">contato@vagaja.com.br</p>
                                <p className="text-gray-text text-footer">Resposta em até 24h</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 items-center">
                            <div className="text-gray-text">
                                <SquareArrowOutUpRight />
                            </div>
                            <div>
                                <p className="text-text-branco font-semibold cursor-pointer">Central de Ajuda</p>
                                <p className="text-gray-text text-footer">Tutoriais e suporte</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-background-2">
                <div className="text-gray-text text-copyright mt-10 p-6 flex flex-col gap-2">
                    <p>
                        © 2026 vagaja Tecnologia e Mobilidade Urbana Ltda.
                        Todos os direitos reservados.
                    </p>
                    <p>Todos os sistemas operacionais</p>
                </div>
            </div>
        </footer>
    )
}