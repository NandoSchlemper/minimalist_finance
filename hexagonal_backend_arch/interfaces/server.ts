import Fastify from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { appRouter } from "./http/routes";
import { UserRepository } from "../infraestructure/repositories/UserRepository";
import { UserService } from "../application/services/UserServices";

async function main() {
  const app = Fastify({ logger: true });

  const userRepository = new UserRepository()
  const userService = new UserService(userRepository)

  // Plugin TRPC
  app.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext: () => ({
      userService
    }) },
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
