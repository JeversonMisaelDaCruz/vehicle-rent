import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'
import { prisma } from '../../lib/prisma'

export async function createTypeVehicle(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/typevehicle',
    {
      schema: {
        body: z.object({
          name: z.string().min(3).max(25),
        }),
      },
    },
    async (request) => {
      const { name } = request.body
      const sendTypeVehicle = await prisma.typeVehicle.create({
        data: {
          name,
        },
      })

      return { typeVehicleId: sendTypeVehicle.id }
    },
  )
}
