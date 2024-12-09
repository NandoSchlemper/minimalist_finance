import type { IUserRepository } from "../../domain/repositories/IUserRepository";
import type { User } from "../../domain/user";
import type { CreateUserDTO } from "../../shared/types";

export class UserService {
    constructor(private userRepository: IUserRepository) {}

    async createUser(userData: CreateUserDTO): Promise<User> {
        const user = await this.userRepository.create(userData)
        return user
    }
}