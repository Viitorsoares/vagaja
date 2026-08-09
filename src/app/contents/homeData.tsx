import { Globe, Zap, ChartSpline, Shield, Users, LucideIcon } from 'lucide-react';

export interface StatisticItem {
  title: string
  description: string
}

export interface StepItem {
  title: string
  description: string
}

export interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

export const statistic: StatisticItem[] = [
  { title: "12+", description: "Cidades atendidas" },
  { title: "3.4k", description: "Vagas monitoradas" },
  { title: "840", description: "Agentes cadastrados" },
  { title: "98%", description: "Uptime de sistema" }
]

export const step: StepItem[] = [
  { title: "1. Acesse o mapa", description: "Abra o mapa público no seu navegador, sem cadastro ou login necessário." },
  { title: "2. Encontre a vaga", description: "Visualize quais estacionamentos têm vagas livres perto de você em um só clique." },
  { title: "3. Chegue direto", description: "Navegue ao estacionamento escolhido e economize tempo e combustível." },
]

export const feature: FeatureItem[] = [
  { icon: Globe, title: "Mapa interativo", description: "Interface de mapa fluída com marcadores e zoom suave" },
  { icon: Zap, title: "Acesso instantâneo", description: "Sem cadastro para motoristas. Abra e use em poucos segundos" },
  { icon: ChartSpline, title: "Painel exclusivo", description: "Ferramentas de gestão, filtros por zona e relatórios para agentes." },
  { icon: Shield, title: "Multi-agente e zonas", description: "Gerencie equipes de fiscalização com divisão por zonas geográficas." },
  { icon: Users, title: "Relatórios e histórico", description: "Análise de ocupação, horários de pico e tendências por região." },
]