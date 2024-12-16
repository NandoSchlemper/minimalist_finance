import { defineConfig } from "drizzle-kit";
import { env } from "./shared/env";

export default defineConfig({
  dialect: "postgresql",
  schema: "./infraestructure/db/schemas/*",
  out: "./infraestructure/db/migrations/",
  dbCredentials: {
    url: env.DB_URL_CONNECTION
  }
});
