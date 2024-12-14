import { CreateUserSchema } from "../../../../../../shared/validations";
import { procedure, router } from "../../routerTRPC";

export const AuthRouter = router({
    register: procedure
        .input(CreateUserSchema)
        .mutation()
})