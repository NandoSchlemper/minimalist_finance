import {z} from "zod"
import 'dotenv/config'

const envSchema = z.object({
    DB_URL_CONNECTION: z.string().url(),
    JWT_SECRET: z.string(),
})

export const env = envSchema.parse({
    DB_URL_CONNECTION: process.env.DB_URL_CONNECTION,
    JWT_SECRET: process.env.JWT_SECRET
})