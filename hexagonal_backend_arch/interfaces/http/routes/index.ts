import { router } from "../routerTRPC";
import { userRouter } from "./user";

export const appRouter = router({
    user: userRouter
})