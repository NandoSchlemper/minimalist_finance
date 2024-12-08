import { procedure, router } from "../trpc";

export const appRouter = router({
    test: procedure.query(() => {
        return {message: "Hello"}
    })
})