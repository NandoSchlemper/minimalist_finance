import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/trpc/http/routes';

const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: "http://localhost:3000/trpc"
        })
    ]
})

async function main() {
    const user = await client.auth.registerUser.mutate({
        username: "claudio",
        email: "algumemail@gmail.com"
    }) // Deu certo, criar um validador agr

    console.log(user)
}

main();