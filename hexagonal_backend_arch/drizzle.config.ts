import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./infraestructure/db/schemas/*",
  out: "./infraestructure/db",
});
