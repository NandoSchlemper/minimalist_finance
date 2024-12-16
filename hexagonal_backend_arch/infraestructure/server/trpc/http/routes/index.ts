import { router } from "../routerTRPC";
import { authRouter } from "./authRouter";
import { userRouter } from "./userRouter";

export const appRouter = router({
    user: userRouter,
    auth: authRouter
})

export type AppRouter = typeof appRouter