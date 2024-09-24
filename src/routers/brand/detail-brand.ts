
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '../../lib/prisma'
import z from 'zod'

export async function detailBrand(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/brand/:brandId',
    {
      schema: {
        params: z.object({
          brandId: z.string().uuid(),
        }),
      },
    },
    async (request) => {
      const { brandId } = request.params
      const brand = await prisma.brand.findUnique({
        where: {
          id: brandId,
        },
      })


      return { brand }
    },
  )
}

