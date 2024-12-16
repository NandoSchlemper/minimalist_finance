import jwt from "jsonwebtoken";
import type { User } from "../../domain/entities/User";

export interface IAuthRepository {
    generateToken(jwtPayload: User): Promise<string>
    validateToken(jwtToken: string): Promise<string | jwt.JwtPayload>
}