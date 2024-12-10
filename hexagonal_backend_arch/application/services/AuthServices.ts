import type { User } from "../../domain/entities/User";
import type { JWTValidadeReturn } from "../../domain/value-objects/JWT.auth";
import type { IAuthRepository } from "../ports/IAuthRepository";


export class AuthService {
    constructor(private authRepository: IAuthRepository) {}

    async create(jwtPayload: User): Promise<string> {
        const payload = jwtPayload
        this.authRepository.generateToken(payload)
        return "ha"
    }

    async validate(jwtToken: string): Promise<JWTValidadeReturn> {
        const token = jwtToken
        this.authRepository.validateToken(token)
        return {valid: false}
    }
}