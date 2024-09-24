import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../../lib/prisma";

export async function updateBrand(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    "/brand/:brandId",
    {
      schema: {
        params: z.object({
          brandId: z.string().uuid(),
        }),
        body: z.object({
          name: z.string(),
        }),
      },
    },
    async (request: any, reply) => {
      const { brandId } = request.params;
      const { name } = request.body;

      await prisma.brand.update({
        where: {
          id: brandId,
        },
        data: {
          name,
        },
      });
      reply.send({ success: true, updatedName: name });
    }
  );
}
