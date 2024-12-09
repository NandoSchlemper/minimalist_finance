import type { User } from "../../infraestructure/db/schemas/users";
import type { CreateUserDTO } from "../../infraestructure/db/schemas/users";

export interface IUserRepository {
    create(userData: CreateUserDTO): Promise<User>
}