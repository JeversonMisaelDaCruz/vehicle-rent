import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { prisma } from '../../lib/prisma'

export async function listVehicles(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/vehicle', async () => {
    const listVehicle = await prisma.vehicle.findMany()

    return { listVehicle }
  })
}

// ajustar rotas para o plural /vehicles
