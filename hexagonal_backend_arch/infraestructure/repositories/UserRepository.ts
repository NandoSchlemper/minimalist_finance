import type { User } from "../../domain/user";
import type { IUserRepository } from "../../domain/repositories/IUserRepository";
import type { CreateUserDTO } from "../../shared/types";

export class UserRepository implements IUserRepository {
    async create(userData: CreateUserDTO): Promise<User> {
        const user = await db.
            .insert(users)
            .values({
                username: userData.username,
                email: userData.email
            })
            .returning()
        
        return user
    }
}