import type { User, CreateUserDTO } from "../../domain/entities/User";

export interface IUserRepository {
    create(userData: CreateUserDTO): Promise<User>
}