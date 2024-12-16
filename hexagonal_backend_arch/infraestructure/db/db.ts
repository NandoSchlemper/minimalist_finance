import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '../../shared/env';


export const client = postgres(env.DB_URL_CONNECTION)
export const db = drizzle({client});