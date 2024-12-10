import {pgTable, text, uuid} from "drizzle-orm/pg-core"

export const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    username: text('username').notNull(),
    email: text('email').notNull().unique()
})

