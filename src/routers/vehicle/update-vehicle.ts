import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '../../lib/prisma'
import z from 'zod'

export async function updateVehicle(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/vehicle/:vehicleId',
    {
      schema: {
        params: z.object({
          vehicleId: z.string().uuid(),
        }),
        body: z.object({
          name: z.string(),
          year: z.number(),
        }),
      },
    },
    async (request) => {
      const { vehicleId } = request.params

      const { name, year } = request.body

      await prisma.vehicle.update({
        where: {
          id: vehicleId,
        },
        data: {
          name,
          year,
        },
      })
    },
  )
}

// adicionar return
