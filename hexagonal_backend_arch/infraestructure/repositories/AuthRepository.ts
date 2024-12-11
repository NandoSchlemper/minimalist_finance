import type { IAuthRepository } from "../../application/ports/IAuthRepository";
import type { User } from "../../domain/entities/User";
import jwt, {type JwtPayload}  from "jsonwebtoken";
import { env } from "../../shared/env";

async function verifyToken(jwtToken: string): Promise<JwtPayload> {
    return new Promise((resolve, reject) => {
        jwt.verify(jwtToken, env.JWT_SECRET, (err, decoded) => {
            if (err) {
                reject(`Erro ao validar JWT: ${err.message}`)
            } else {
                resolve(decoded as JwtPayload)
            }
        })
    })
}

export class AuthRepository implements IAuthRepository {
    async generateToken(jwtPayload: User): Promise<string> {
        try {
            const payload = jwtPayload
            
            const token = jwt.sign(payload, env.JWT_SECRET, {algorithm: 'HS256'})

            if (!token) {
                throw new Error("The token are undefined")
            }

            return token
        } catch (err) {
            throw new Error(`Erro ao gerar JWT (Repository), ${err}`)
        }
    }

    async validateToken(jwtToken: string): Promise<JwtPayload> {
        try {
            const result = verifyToken(jwtToken)
            return result
        } catch (err) {
            throw new Error(`Erro ao validar JWT (repository), ${err}`)
        }
    }
}