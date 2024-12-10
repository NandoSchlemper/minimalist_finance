import type { IUserRepository } from "../ports/IUserRepository";
import type { User, CreateUserDTO } from "../../domain/entities/User";

export class UserService {
    constructor(private userRepository: IUserRepository) {}

    async createUser(userData: CreateUserDTO): Promise<User> {
        const user = await this.userRepository.create(userData)
        return user
    }
}