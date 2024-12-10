import type { IUserRepository } from "../ports/IUserRepository";
import type { User } from "../../infraestructure/db/schemas/UserSchema";
import type { CreateUserDTO } from "../../infraestructure/db/schemas/UserSchema";

export class UserService {
    constructor(private userRepository: IUserRepository) {}

    async createUser(userData: CreateUserDTO): Promise<User> {
        const user = await this.userRepository.create(userData)
        return user
    }
}