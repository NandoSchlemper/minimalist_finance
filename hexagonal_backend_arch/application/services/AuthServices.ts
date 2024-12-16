import type { CreateUserDTO, User } from "../../domain/entities/User";
import type { IAuthRepository } from "../ports/IAuthRepository";
import { IUserRepository } from "../ports/IUserRepository";


export class AuthService {
    constructor(
        private authRepository: IAuthRepository,
        private userRepository: IUserRepository
    ) {}

    async create(user: CreateUserDTO): Promise<string> {
        const userObject = await this.userRepository.create(user)
        const result = this.authRepository.generateToken(userObject)
        return result
    }   

    async validate(jwtToken: string): Promise<string> { // mudar dps
        const token = jwtToken
        this.authRepository.validateToken(token)
        return "fon"
    }
}