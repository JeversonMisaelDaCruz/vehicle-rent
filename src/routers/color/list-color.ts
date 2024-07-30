import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '../../lib/prisma'

export async function listColor(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/color', async () => {
    const listColor = await prisma.color.findMany()

    return { listColor }
  })
}
