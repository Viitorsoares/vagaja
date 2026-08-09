import Link from "next/link";
import { Button } from "@/components/ui/button";
import StatisticCard from "./contents/props/statisticCard";
import FeatureCard from "./contents/props/featureCard";
import StepCard from "./contents/props/stepCard";
import ImageActionCard from "./contents/props/imageActionCard";
import { feature, statistic, step } from "./contents/homeData";

export default function Home() {
  return (
    <main className="h-auto w-full bg-fundo">
      <section className="px-6">
        <div>
          <h1 className="pt-20 text-text-branco text-center text-title font-extrabold leading-tight">Estacionamento <br /> urbano <br />
            <span className="text-title font-extrabold text-azul"> inteligente e de rápida atualização</span>
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

      <section className="min-full mt-15 bg-background-2">
        <div className="h-160 px-6">
          <div className="text-text-branco pt-8">
            <h2 className="text-2xl font-bold pb-2">Como Funciona</h2>
            <p>Simples para motoristas e poderoso para agentes.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-8">
            {step.map((step, i) => (
              <StepCard key={i} title={step.title} description={step.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col my-10 gap-6 px-6">
        <ImageActionCard
          href={"/driver"}
          imageSrc={"/image/driver.jpg"}
          title={"Sou Motorista"}
          subtitle={"Ver mapa de vagas disponíveis"}
          actionText={"Acessar mapa agora"}
        />
        <ImageActionCard
          href={"/form/loginForm"}
          imageSrc={"/image/agente.jpg"}
          title={"Sou Agente"}
          subtitle={"Painel de gestão e fiscalização urbana"}
          actionText={"Fazer login"}
        />
      </section>

      <section className="min-full mt-15 bg-background-2">
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
      </section>
    </main>
  );
}
