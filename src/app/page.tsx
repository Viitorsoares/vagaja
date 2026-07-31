import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Globe, Zap, ChartSpline, Shield, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import StatisticCard from "./_components/statisticCard";
import FeatureCard from "./_components/featureCard";

const statistic = [
  { title: "12+", description: "Cidades atendidas" },
  { title: "3.4k", description: "Vagas monitoradas" },
  { title: "840", description: "Agentes cadastrados" },
  { title: "98%", description: "Uptime de sistema" }
]



const feature = [
  { icon: Globe, title: "Mapa interativo", description: "Interface de mapa fluída com marcadores e zoom suave" },
  { icon: Zap, title: "Acesso instantâneo", description: "Sem cadastro para motoristas. Abra e use em poucos segundos" },
  { icon: ChartSpline, title: "Painel exclusivo", description: "Ferramentas de gestão, filtros por zona e relatórios para agentes." },
  { icon: Shield, title: "Multi-agente e zonas", description: "Gerencie equipes de fiscalização com divisão por zonas geográficas." },
  { icon: Users, title: "Relatórios e histórico", description: "Análise de ocupação, horários de pico e tendências por região." },
]

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
        <Button className="bg-azul py-7 text-paragraph rounded-4xl">
          <Link href={"/driver"} className="text-text-branco font-medium">Sou Motorista - Ver Vagas</Link>
        </Button>
        <Button className="bg-azul py-7 text-paragraph rounded-4xl">
          <Link href={"/form/loginForm"} className="text-text-branco font-medium">Sou Agente - Área Restrita</Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-15 px-6">
        {statistic.map((stat, i) => (
          <StatisticCard key={i} title={stat.title} description={stat.description} />
        ))}
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
        <Link href={"/driver"}>
          <div className="relative cursor-pointer">
            <Image
              src={"/image/driver.jpg"}
              alt="carro"
              width={400}
              height={300}
              priority
              className="rounded-3xl w-auto object-cover">
            </Image>

            <div className="absolute inset-0 bg-linear-to-t from-fundo to-transparent"></div>

            <div className="absolute bottom-6 left-6 flex flex-col gap-2">
              <h2 className="text-text-branco text-4xl font-extrabold">Sou Motorista</h2>
              <p className="text-text-branco">Ver mapa de vagas disponíveis</p>
              <p className="text-azul font-bold">Acessar mapa agora</p>
            </div>
          </div>
        </Link>

        <Link href={"/form/loginForm"}>
          <div className="relative cursor-pointer">
            <Image
              src={"/image/agente.jpg"}
              alt="carro"
              width={400}
              height={300}
              priority
              className="rounded-3xl w-auto object-cover">
            </Image>

            <div className="absolute inset-0 bg-linear-to-t from-fundo to-transparent"></div>

            <div className="absolute bottom-6 left-6 flex flex-col gap-2">
              <h2 className="text-text-branco text-4xl font-extrabold">Sou Agente</h2>
              <p className="text-text-branco">Painel de gestão e fiscalização urbana</p>
              <p className="text-azul font-bold">Fazer login</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="min-full mt-15 bg-background-2">
        <div className="h-220 px-6">
          <div className="text-text-branco pt-8">
            <h2 className="text-2xl font-bold pb-2">Recursos</h2>
            <p>Tecnologia que faz a diferença</p>
          </div>

          <div className="grid gap-4 mt-8">
            {feature.map((feat, i) => (
              <FeatureCard key={i} icon={feat.icon} title={feat.title} description={feat.description} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
