import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '../../lib/prisma'
export async function listBrand(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/brand', async () => {
    const listBrand = await prisma.brand.findMany()

    return { listBrand }
  })
}