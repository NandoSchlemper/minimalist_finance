import type { User } from "../../infraestructure/db/schemas/UserSchema";
import type { CreateUserDTO } from "../../infraestructure/db/schemas/UserSchema";

export interface IUserRepository {
    create(userData: CreateUserDTO): Promise<User>
}