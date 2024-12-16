// pegar o userRepository
// pegar o authrepository
// vincular ambos no Auth Service
// criar rota para criar usuário através do auth service

import { AuthService } from "../../../../../../application/services/AuthServices";
import { CreateUserSchema } from "../../../../../../shared/validations";
import { AuthRepository } from "../../../../../repositories/AuthRepository";
import { UserRepository } from "../../../../../repositories/UserRepository";
import { procedure, router } from "../../routerTRPC";

const userRepository = new UserRepository()
const authRepository = new AuthRepository()
const authService = new AuthService(
    authRepository,
    userRepository
)

export const authRouter = router({
    registerUser: procedure
        .input(CreateUserSchema)
        .mutation(async ({input}) => {
            const result = await authService.create(input)
            if (!result) console.error("Erro ao criar o usuário")

            return result
        })
})