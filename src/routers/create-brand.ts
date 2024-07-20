import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function createBrand(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/brand",
    {
      schema: {
        body: z.object({
          name: z.string().min(3).max(25),
        }),
      },
    },
    async (request) => {
      const { name } = request.body;
      const sendBrand = await prisma.brand.create({
        data: {
          name,
        },
      });

      return { brandid: sendBrand.id };
    }
  );
}
