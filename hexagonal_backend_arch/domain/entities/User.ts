export type User = {
    id: string,
    username: string,
    email: string
}

export type CreateUserDTO = Omit<User, "id">