import Fastify from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { appRouter } from "./http/routes";
import { createDependencies } from "../infraestructure/dependencyFactory";

async function main() {
  const app = Fastify({ logger: true });

  const dependencies = createDependencies()

  // Plugin TRPC
  app.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { 
      router: appRouter,
      createContext: () => dependencies
    }
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
