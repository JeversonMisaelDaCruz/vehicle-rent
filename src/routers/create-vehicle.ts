import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function createVehicle(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/vehicle",
    {
      schema: {
        body: z.object({
          name: z.string().min(3).max(25),
          year: z.number().max(4).min(4),
          DayValue: z.number().finite(),
          typefuel: z.enum([ "Gasoline",
            "Diesel",
            "Gas",
            "Eletric",
            "Flex"]),
          color_id: z.string(),
          model_id: z.string()

        }),
      },
    },
    async (request) => {
      const { name,year,DayValue,typefuel,color_id,model_id } = request.body;
      const sendTypeVehicle = await prisma.vehicle.create({
        data: {
          name,
          year,
          DayValue,
          typefuel,
          color_id,
          model_id

        },
      });

      return { typeVehicleId: sendTypeVehicle.id };
    }
  );
}
