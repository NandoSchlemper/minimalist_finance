import { CreateUserSchema } from "../../../../shared/validations";
import { router, procedure } from "../../routerTRPC";

export const userRouter = router({
    getUser: procedure.query(() => {
        return {message: "Mensagem"}
    }),

    createUser: procedure
        .input(CreateUserSchema)
        .mutation(async ({ctx}) => {
            const {userService} = ctx
            
        })
})