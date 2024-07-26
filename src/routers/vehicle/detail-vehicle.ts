import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '../../lib/prisma'
import z from 'zod'

export async function detailVehicle(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/vehicle/:vehicleId',
    {
      schema: {
        params: z.object({
          vehicleId: z.string().uuid(),
        }),
      },
    },
    async (request) => {
      const { vehicleId } = request.params
      const vehicle = await prisma.vehicle.findUnique({
        where: {
          id: vehicleId,
        },
      })

      return { vehicle }
    },
  )
}
