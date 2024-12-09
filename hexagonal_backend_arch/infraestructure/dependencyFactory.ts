import { UserService } from "../application/services/UserServices"
import { UserRepository } from "./repositories/UserRepository"

type Context = {
    userService: UserService
}

export const createDependencies = () => {
    const userRepository = new UserRepository()
    const userService = new UserService(userRepository)

    return {userService}
}