import type { User } from "../../domain/entities/User";
import type { JWTValidadeReturn } from "../../domain/value-objects/JWT.auth";

export interface IAuthRepository {
    generateToken(jwtPayload: User): Promise<string>
    validateToken(jwtToken: string): Promise<JWTValidadeReturn>
}