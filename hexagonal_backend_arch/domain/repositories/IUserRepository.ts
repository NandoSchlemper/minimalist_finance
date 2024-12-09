import type { CreateUserDTO } from "../../shared/types";
import type { User } from "../user";

export interface IUserRepository {
    create(userData: CreateUserDTO): Promise<User>
}