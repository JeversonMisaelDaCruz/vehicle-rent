import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function createColor(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/color",
    {
      schema: {
        body: z.object({
          name: z.string().min(3).max(25),
        }),
      },
    },
    async (request) => {
      const { name } = request.body;
      const sendColor = await prisma.color.create({
        data: {
          name,
        },
      });
      return { colorid: sendColor.id };
    }
  );
}
