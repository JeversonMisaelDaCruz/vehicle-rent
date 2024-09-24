import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../../lib/prisma";
import z from "zod";

export async function updateColor(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    "/color/:colorId",
    {
      schema: {
        params: z.object({
          colorId: z.string().uuid(),
        }),
        body: z.object({
          name: z.string(),
        }),
      },
    },

    async (request, reply) => {
      const { colorId } = request.params;

      const { name } = request.body;

      await prisma.color.update({
        where: {
          id: colorId,
        },
        data: {
          name,
        }, 
      });
      reply.send({ success: true });
    }
    
  );
}


// adicionar return
