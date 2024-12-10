import type { IUserRepository } from "../../application/ports/IUserRepository";
import { db } from "../db/db";
import { users } from "../db/schemas/UserSchema";
import type { User, CreateUserDTO } from "../../domain/entities/User";


export class UserRepository implements IUserRepository {
    async create(userData: CreateUserDTO): Promise<User> {
        try {
            const user = await db
                .insert(users)
                .values(userData)
                .returning()

            if (!user) {
                throw new Error("Usuario nao foi criado! (Repository)")
            }

            return user[0]
        } catch (err) {
            console.error("Erro ao criar usuario (repository)", err)
            throw new Error("Erro ao inserir usuario no banco de dados! (repository)")
        }
    }
}