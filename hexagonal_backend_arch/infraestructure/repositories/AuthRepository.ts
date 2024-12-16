import type { IAuthRepository } from "../../application/ports/IAuthRepository";
import type { User } from "../../domain/entities/User";
import jwt from "jsonwebtoken";
import { env } from "../../shared/env";

export class AuthRepository implements IAuthRepository {
    async generateToken(jwtPayload: User): Promise<string> {
        const payload = jwtPayload
        
        const result = jwt.sign(payload, env.JWT_SECRET, {
            algorithm: 'HS256',
            expiresIn: 300
        }) 
        
        return result
    }

    async validateToken(jwtToken: string): Promise<string | jwt.JwtPayload> {
        const result = jwt.verify(jwtToken, env.JWT_SECRET)
        return result
    }
}