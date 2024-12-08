import {fastifyTRPCPlugin, FastifyTRPCPluginOptions} from '@trpc/server/adapters/fastify'
import fastify from 'fastify'
import { appRouter } from '../api/trpc/routers'

export default function createApp() {
    const server = fastify({
        http2: true,
        maxParamLength: 500,
        logger: true
    })
    
    server.register(fastifyTRPCPlugin, {
        // useWS: true --> after implementation of web-sockets
        prefix: '/trpc',
        trpcOptions: {router: appRouter}
    })

    const Start = async () => {
        try {
            await server.listen({port: 4000})
        } catch (err) {
            server.log.error(err);
            process.exit(1)
        }
    }

    const Stop = async () => {
        await server.close()
    }

    return {server, Start, Stop}
}