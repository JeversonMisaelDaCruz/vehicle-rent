
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '../../lib/prisma'
import z from 'zod'

export async function detailColor(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/color/:colorid',
    {
      schema: {
        params: z.object({
          colorid: z.string().uuid(),
        }),
      },
    },
    async (request) => {
      const { colorid } = request.params
      const color = await prisma.color.findUnique({
        where: {
          id: colorid,
        },
      })

      return { color }
    },
  )
}
