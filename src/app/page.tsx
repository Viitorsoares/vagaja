import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="h-auto w-full bg-fundo">
      <section className="px-6">
        <div>
          <h1 className="pt-20 text-branco text-center text-4xl font-extrabold leading-tight">Estacionamento <br /> urbano <br />
            <span className="text-4xl font-extrabold text-azul"> inteligente e em tempo real</span>
          </h1>
          <p className="mt-8 text-center text-branco"> Encontre vagas livres em segundos ou gerencie
          o estacionamento urbano como agente de fiscalização.
          Tecnologia a serviço da cidade.</p>
        </div>
      </section>

      <div className="mt-10 px-6 flex flex-col gap-4">
        <button className="bg-azul py-3 rounded-2xl">
          <Link href={"/driver"} className="text-branco">Sou Motorista - Ver Vagas</Link>
        </button>
        <button className="bg-roxo py-3 rounded-2xl">
          <Link href={"/auth/loginForm"} className="text-branco">Sou Agente - Área Restrita</Link>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-15 px-6">
        <Card className="flex flex-col py-12 px-7 rounded-xl bg-azul">
          <p className="text-1.7rem font-extrabold text-branco">12+</p>
          <p className="text-badge">Cidades atendidas</p>
        </Card>

        <Card className="flex flex-col py-12 px-6 rounded-xl bg-azul">
          <p className="text-1.7rem font-extrabold text-branco">3.4k</p>
          <p className="text-badge">Vagas monitoradas</p>
        </Card>

        <Card className="flex flex-col py-12 px-5 rounded-xl bg-azul">
          <p className="text-1.7rem font-extrabold text-branco">840</p>
          <p className="text-badge">Agentes cadastrados</p>
        </Card>

        <Card className="flex flex-col py-12 px-6 rounded-xl bg-azul">
          <p className="text-1.7rem font-extrabold text-branco">98%</p>
          <p className="text-badge">Uptime de sistema</p>
        </Card>
      </div>

      <div className="min-h-screen mt-15 bg-background-2">
        <div className="px-6">
          <div className="text-branco pt-8">
            <h2 className="text-2xl font-bold pb-2">Como Funciona</h2>
            <p>Simples para motoristas e poderoso para agentes.</p>
          </div>

          <div className="flex flex-col gap-5 mt-8">
            <Card className="bg-azul w-full flex flex-col gap-3 px-7 py-15 rounded-xl text-badge whitespace-normal">
              <p className="text-badge-title text-branco font-bold">1. Acesse o mapa</p>
              <p className="text-branco">Abra o mapa público no seu navegador, sem cadastro ou login necessário.</p>
            </Card>

            <Card className="bg-azul w-full flex flex-col gap-3 px-7 py-15 rounded-xl text-badge whitespace-normal">
              <p className="text-badge-title text-branco font-bold">2. Encontre a vaga</p>
              <p className="text-branco">Visualize em tempo real quais estacionamentos têm vagas livres perto de você.</p>
            </Card>

            <Card className="bg-azul w-full flex flex-col gap-3 px-7 py-15 rounded-xl text-badge whitespace-normal">
              <p className="text-badge-title text-branco font-bold">3. Chegue direto</p>
              <p className="text-branco">Navegue ao estacionamento escolhido e economize tempo e combustível.</p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
