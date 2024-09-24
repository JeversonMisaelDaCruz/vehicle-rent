import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../../lib/prisma";

export async function deleteBrand(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    "/brand/:brandId",
    {
      schema: {
        params: z.object({
          brandId: z.string().uuid(), 
        }),
      },
    },
    async (request, reply) => {
      const { brandId } = request.params;  

      const brand = await prisma.brand.findUnique({
        where: {
          id: brandId,
        },
      });

      if (!brand) {
        reply.send({ success: false, message: "Brand not found" });
      } else {
        await prisma.brand.delete({
          where: {
            id: brandId,
          },
        });

        reply.send({ success: true, deletedBrandId: brandId });
      }
    }
  );
}
