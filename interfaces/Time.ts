import { Jogador } from "./Jogador";

export type EsportesPermitidos = 
  "futebol" | "vôlei" | "vôlei de praia" | "tênis em duplas"

export type EsporteNumeroDeJogadores = Record<EsportesPermitidos, number>

export interface Time {
  jogadores: Jogador[]
  esporte: EsportesPermitidos
}