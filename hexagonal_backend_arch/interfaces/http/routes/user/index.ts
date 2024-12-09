import { UserService } from "../../../../application/services/UserServices";
import { UserRepository } from "../../../../infraestructure/repositories/UserRepository";
import { CreateUserSchema } from "../../../../shared/validations";
import { router, procedure } from "../../routerTRPC";

const userRepository = new UserRepository()
const userService = new UserService(userRepository)

export const userRouter = router({
    getUser: procedure.query(() => {
        return {message: "Mensagem"}
    }),

    createUser: procedure
        .input(CreateUserSchema)
        .mutation(async ({ctx, input}) => {
            const result = await userService.createUser(input)
            return {result: result}
        })
})