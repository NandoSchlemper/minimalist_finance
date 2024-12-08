// pega a instancia do Fastify e cria uma instancia TRPC em cima dela, compartilhando a estrutura para as rotas
import { initTRPC } from "@trpc/server";

const t = initTRPC.create()

export const procedure = t.procedure
export const router = t.router

