import type { IAuthRepository } from "../../application/ports/IAuthRepository";
import type { User } from "../../domain/entities/User";
import type { JWTValidadeReturn } from "../../domain/value-objects/JWT.auth";

export class AuthRepository implements IAuthRepository {
    async generateToken(jwtPayload: User): Promise<string> {
        try {
            const paylaod = jwtPayload
            
            return "ha"
        } catch (err) {
            throw new Error(`Erro ao gerar JWT (Repository), ${err}`)
        }
    }

    async validateToken(jwtToken: string): Promise<JWTValidadeReturn> {
        try {
            const token = jwtToken

            const result: JWTValidadeReturn = {
                valid: false
            }
            return result
        } catch (err) {
            throw new Error(`Erro ao validar JWT (repository), ${err}`)
        }
    }
}