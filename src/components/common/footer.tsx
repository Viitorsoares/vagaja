import { MapPinIcon } from "@heroicons/react/24/solid";
import { Mail, Phone, SquareArrowOutUpRight } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="px-6 bg-fundo">
            <div>
                <div className="flex gap-1.5 mb-5">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-azul">
                        <MapPinIcon className="w-4 text-branco"></MapPinIcon>
                    </div>
                    <p className="text-branco text-xl font-extrabold">vagajá</p>
                </div>
                
                <p className="text-gray-text">
                    Conectamos motoristas a vagas disponíveis e capacitamos 
                    agentes com ferramentas de gestão urbana em tempo real.
                </p>

                <div className="flex flex-row gap-4 mt-10 text-gray-text">
                    <FaInstagram className="w-7 h-7" />
                    <FaGithub className="w-7 h-7" />
                    <FaLinkedin className="w-7 h-7" />
                    <FaTwitter className="w-7 h-7" />
                </div>
            </div>

            <div className="mt-10">
                <div className="mb-10">
                    <h2 className="text-branco font-extrabold pb-3">Serviços</h2>
                    <div className="text-gray-text  flex flex-col gap-3">
                        <p>Mapa de Vagas</p>
                        <p>Área do Agente</p>
                        <p>Cadastro de Agente</p>
                        <p>Planos e Parcerias</p>
                        <p>API para Empresas</p>
                    </div>
                </div>

                <div className="mb-10">
                    <h2 className="text-branco font-extrabold pb-3">Institucioal</h2>
                    <div className="text-gray-text flex flex-col gap-3">
                        <p>Sobre nós</p>
                        <p>Política de Privacidade</p>
                        <p>Termos de Uso</p>
                        <p>Acessibilidade</p>
                        <p>Imprensa</p>
                    </div>
                </div>
                
                <div>
                    <h2 className="text-branco font-extrabold">Contato</h2>
                    <div className="flex flex-col gap-3 pt-3">
                        <div className="flex flex-row gap-3 items-center">
                            <div className="text-gray-text">
                                <Phone />
                            </div>
                            <div>
                                <p className="text-branco font-semibold">0800 721 0000</p>
                                <p className="text-gray-text">Seg–Sex, 8h às 18h</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 items-center">
                            <div className="text-gray-text">
                                <Mail />
                            </div>
                            <div>
                                <p className="text-branco font-semibold">contato@parkurban.com.br</p>
                                <p className="text-gray-text">Resposta em até 24h</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 items-center">
                            <div className="text-gray-text">
                                <SquareArrowOutUpRight />
                            </div>
                            <div>
                                <p className="text-branco font-semibold">Central de Ajuda</p>
                                <p className="text-gray-text">Tutoriais e suporte</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-gray-text mt-10 mb-6 flex flex-col gap-2">
                <p>
                    © 2026 ParkUrban Tecnologia e Mobilidade Urbana Ltda. 
                    Todos os direitos reservados.
                </p>
                <p>Todos os sistemas operacionais</p>
            </div>
        </footer>
    )
}