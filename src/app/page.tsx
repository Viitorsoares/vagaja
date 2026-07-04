import Link from "next/link";
import { Card } from "@/components/ui/card";

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
        <button className="bg-azul py-3 rounded-2xl">
          <Link href={"/driver"} className="text-text-branco font-medium">Sou Motorista - Ver Vagas</Link>
        </button>
        <button className="bg-roxo py-3 rounded-2xl">
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

      <div className="min-h-screen mt-15 bg-background-2">
        <div className="px-6">
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
    </main>
  );
}
