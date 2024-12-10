import { router } from "../routerTRPC";
import { userRouter } from "./userRouter";

export const appRouter = router({
    user: userRouter
})