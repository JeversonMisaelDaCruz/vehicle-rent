import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'
import { prisma } from '../../lib/prisma'

export async function createVehicle(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/vehicle',
    {
      schema: {
        body: z.object({
          name: z.string().min(4).max(40),
          year: z.number().min(1900).max(2024),
          DayValue: z.number().finite(),
          typefuel: z.enum(['Gasoline', 'Diesel', 'Gas', 'Eletric', 'Flex']),
          colorId: z.string(),
          modelId: z.string(),
        }),
      },
    },
    async (request) => {
      const { name, year, DayValue, typefuel, colorId, modelId } = request.body
      const vehicle = await prisma.vehicle.create({
        data: {
          name,
          year,
          DayValue,
          typefuel,
          color_id: colorId,
        
        },
      })

      return { VehicleId: vehicle.id }
    },
  )
}
