import {z} from "zod";

export const CreateUserSchema = z.object({
    username: z.string().min(3, "Username deve conter ao menos 3 caracteres!"),
    email: z.string().email("Digite um EMAIL!")
})

