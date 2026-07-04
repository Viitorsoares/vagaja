import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Globe, Zap, ChartSpline, Shield, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="h-auto w-full bg-fundo">
      <section className="px-6">
        <div>
          <h1 className="pt-20 text-text-branco text-center text-title font-extrabold leading-tight">Estacionamento <br /> urbano <br />
            <span className="text-title font-extrabold text-azul"> inteligente e em tempo real</span>
          </h1>
          <p className="mt-8 text-center text-subtitle text-text-branco"> Encontre vagas livres em segundos ou gerencie
            o estacionamento urbano como agente de fiscalização.
            Tecnologia a serviço da cidade.</p>
        </div>
      </section>

      <div className="mt-10 px-6 flex flex-col gap-4">
        <button className="bg-azul py-4 rounded-2xl">
          <Link href={"/driver"} className="text-text-branco font-medium">Sou Motorista - Ver Vagas</Link>
        </button>
        <button className="bg-azul py-4 rounded-2xl">
          <Link href={"/auth/loginForm"} className="text-text-branco font-medium">Sou Agente - Área Restrita</Link>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-15 px-6">
        <Card className="flex flex-col text-center p-4 rounded-xl bg-azul">
          <p className="text-2rem font-extrabold text-text-branco">12+</p>
          <p className="text-paragraph text-text-branco">Cidades atendidas</p>
        </Card>

        <Card className="flex flex-col text-center p-4 rounded-xl bg-azul">
          <p className="text-2rem font-extrabold text-text-branco">3.4k</p>
          <p className="text-paragraph text-text-branco">Vagas monitoradas</p>
        </Card>

        <Card className="flex flex-col text-center rounded-xl bg-azul">
          <p className="text-2rem font-extrabold text-text-branco">840</p>
          <p className="text-paragraph text-text-branco">Agentes cadastrados</p>
        </Card>

        <Card className="flex flex-col text-center p-4 rounded-xl bg-azul">
          <p className="text-2rem font-extrabold text-text-branco">98%</p>
          <p className="text-paragraph text-text-branco">Uptime de sistema</p>
        </Card>
      </div>

      <div className="min-full mt-15 bg-background-2">
        <div className="h-160 px-6">
          <div className="text-text-branco pt-8">
            <h2 className="text-2xl font-bold pb-2">Como Funciona</h2>
            <p>Simples para motoristas e poderoso para agentes.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-8">
            <Card className="bg-azul w-full flex flex-col gap-3 p-6 rounded-xl text-badge whitespace-normal">
              <p className="text-badge-title text-text-branco font-bold">1. Acesse o mapa</p>
              <p className="text-text-branco text-paragraph">Abra o mapa público no seu navegador, sem cadastro ou login necessário.</p>
            </Card>

            <Card className="bg-azul w-full flex flex-col gap-3 p-6 rounded-xl text-badge whitespace-normal">
              <p className="text-badge-title text-text-branco font-bold">2. Encontre a vaga</p>
              <p className="text-text-branco text-paragraph">Visualize em tempo real quais estacionamentos têm vagas livres perto de você.</p>
            </Card>

            <Card className="bg-azul w-full flex flex-col gap-3 p-6 rounded-xl text-badge whitespace-normal">
              <p className="text-badge-title text-text-branco font-bold">3. Chegue direto</p>
              <p className="text-text-branco text-paragraph">Navegue ao estacionamento escolhido e economize tempo e combustível.</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-10 gap-6 px-6">
        <div className="">
          <Image
            src={"/image/driver.jpg"}
            alt="carro"
            width={400}
            height={300}
            priority
            className="rounded-3xl">
          </Image>
        </div>

        <div className="">
          <Image
            src={"/image/agente.jpg"}
            alt="carro"
            width={400}
            height={300}
            priority
            className="rounded-3xl">
          </Image>
        </div>
      </div>

      <div className="min-full mt-15 bg-background-2">
        <div className="h-220 px-6">
          <div className="text-text-branco pt-8">
            <h2 className="text-2xl font-bold pb-2">Recursos</h2>
            <p>Tecnologia que faz a diferença</p>
          </div>

          <div className="grid gap-4 mt-8">
            <Card className="bg-azul w-full flex flex-row items-center gap-3 p-6 rounded-xl text-badge whitespace-normal">
              <div>
                <Globe className="w-11 h-11 text-text-branco" />
              </div>
              <div>
                <p className="text-badge-title text-text-branco font-bold">Mapa interativo</p>
                <p className="text-text-branco text-paragraph">Interface de mapa fluída com marcadores e zoom suave.</p>
              </div>
            </Card>

            <Card className="bg-azul w-full flex flex-row items-center gap-3 p-6 rounded-xl text-badge whitespace-normal">
              <div>
                <Zap className="w-11 h-11 text-text-branco" />
              </div>
              <div>
                <p className="text-badge-title text-text-branco font-bold">Acesso instantâneo</p>
                <p className="text-text-branco text-paragraph">Sem cadastro para motoristas. Abra e use em poucos segundos.</p>
              </div>
            </Card>

            <Card className="bg-azul w-full flex flex-row items-center gap-3 p-6 rounded-xl text-badge whitespace-normal">
              <div>
                <ChartSpline className="w-11 h-11 text-text-branco" />
              </div>
              <div>
                <p className="text-badge-title text-text-branco font-bold">Painel exclusivo</p>
                <p className="text-text-branco text-paragraph">Ferramentas de gestão, filtros por zona e relatórios para agentes.</p>
              </div>
            </Card>

            <Card className="bg-azul w-full flex flex-row items-center gap-3 p-6 rounded-xl text-badge whitespace-normal">
              <div>
                <Shield className="w-11 h-11 text-text-branco" />
              </div>
              <div>
                <p className="text-badge-title text-text-branco font-bold">Multi-agente e zonas</p>
                <p className="text-text-branco text-paragraph">Gerencie equipes de fiscalização com divisão por zonas geográficas.</p>
              </div>
            </Card>

            <Card className="bg-azul w-full flex flex-row items-center gap-3 p-6 rounded-xl text-badge whitespace-normal">
              <div>
                <Users className="w-11 h-11 text-text-branco" />
              </div>
              <div>
                <p className="text-badge-title text-text-branco font-bold">Relatórios e histórico</p>
                <p className="text-text-branco text-paragraph">Análise de ocupação, horários de pico e tendências por região.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
