import Fastify from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { appRouter } from "./http/routes";

async function main() {
  const app = Fastify({ logger: true });

  // Plugin TRPC
  app.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext: () => ({}) },
  });

  try {
    await app.listen({ port: 3000 });
    console.log("Servidor rodando em http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main();
