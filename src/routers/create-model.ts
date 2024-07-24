import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'
import { prisma } from '../lib/prisma'

export async function createModel(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/model',
    {
      schema: {
        body: z.object({
          name: z.string().min(3).max(25),
          brandId: z.string(),
          typeVehicleId: z.string(),
        }),
      },
    },
    async (request) => {
      const { name, brandId, typeVehicleId } = request.body
      const sendModelvehicle = await prisma.model.create({
        data: {
          name,
          brandId,
          typeVehicleId,
        },
      })

      return { modelId: sendModelvehicle.id }
    },
  )
}
