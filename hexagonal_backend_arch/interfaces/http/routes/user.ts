import { router, procedure } from "../routerTRPC";

export const userRouter = router({
    getUser: procedure.query(() => {
        return {message: "Mensagem"}
    })
})