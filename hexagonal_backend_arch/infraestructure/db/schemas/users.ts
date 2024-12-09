import {pgTable, text, uuid} from "drizzle-orm/pg-core"
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const users = pgTable('users', {
    id: uuid('id').primaryKey(),
    username: text('username').notNull(),
    email: text('email').notNull().unique()
})

export type User = InferSelectModel<typeof users>
export type CreateUserDTO = InferInsertModel<typeof users>