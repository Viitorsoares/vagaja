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
      <section className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="lg:mx-auto lg:max-w-4xl">
          <h1 className="pt-20 text-text-branco text-center text-title font-extrabold leading-tight max-xs:text-3xl md:pt-24 md:text-5xl lg:pt-28 lg:text-6xl">Estacionamento <br className="lg:hidden" /> urbano <br className="lg:hidden" />
            <span className="font-extrabold text-azul"> inteligente e de rápida atualização</span>
          </h1>
          <p className="mt-8 text-center text-subtitle text-text-branco md:text-xl lg:mx-auto lg:max-w-3xl lg:text-2xl"> Encontre vagas livres em segundos ou gerencie
            o estacionamento urbano como agente de fiscalização.
            Tecnologia a serviço da cidade.</p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl mt-10 px-6 flex flex-col gap-4 md:px-8 md:flex-row md:justify-center md:gap-6">
        <Button className="bg-azul py-7 text-paragraph hover:bg-azul/90 rounded-4xl md:px-8 lg:px-12 lg:text-subtitle">
          <Link href={"/driver"} className="text-text-branco font-medium">Sou Motorista - Ver Vagas</Link>
        </Button>
        <Button className="bg-azul py-7 text-paragraph hover:bg-azul/90 rounded-4xl md:px-8 lg:px-12 lg:text-subtitle">
          <Link href={"/form/loginForm"} className="text-text-branco font-medium">Sou Agente - Área Restrita</Link>
        </Button>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-2 gap-4 mt-15 px-6 md:px-8 md:gap-6 lg:grid-cols-4">
        {statistic.map((stat, i) => (
          <StatisticCard key={i} title={stat.title} description={stat.description} />
        ))}
      </div>

      <section className="min-full mt-15 bg-background-2">
        <div className="mx-auto w-full max-w-7xl px-6 pt-8 pb-10 md:px-8 md:pt-12 md:pb-14 lg:pt-16 lg:pb-20">
          <div className="text-text-branco">
            <h2 className="text-2xl font-bold pb-2 md:text-3xl lg:text-4xl">Como Funciona</h2>
            <p className="md:text-subtitle">Simples para motoristas e poderoso para agentes.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 md:gap-6 md:mt-10">
            {step.map((step, i) => (
              <StepCard key={i} title={step.title} description={step.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl flex flex-col my-10 gap-6 px-6 md:px-8 md:my-14 md:grid md:grid-cols-2 lg:my-16 lg:gap-8">
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
        <div className="mx-auto w-full max-w-7xl px-6 pt-8 pb-10 md:px-8 md:pt-12 md:pb-14 lg:pt-16 lg:pb-20">
          <div className="text-text-branco">
            <h2 className="text-2xl font-bold pb-2 md:text-3xl lg:text-4xl">Recursos</h2>
            <p className="md:text-subtitle">Tecnologia que faz a diferença</p>
          </div>

          <div className="grid gap-4 mt-8 md:grid-cols-2 md:gap-6 md:mt-10 lg:grid-cols-3">
            {feature.map((feat, i) => (
              <FeatureCard key={i} icon={feat.icon} title={feat.title} description={feat.description} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
