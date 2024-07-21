import fastify from "fastify";
import { createColor } from "./routers/create-color";
import cors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { createBrand } from "./routers/create-brand";
import { createTypeVehicle } from "./routers/create-typeVehicle";
import { create } from "domain";
import { createModel } from "./routers/create-model";

const app = fastify();

app.register(cors, {
  origin: true,
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createColor);
app.register(createBrand);
app.register(createTypeVehicle);
app.register(createModel);
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Servidor online");
  });
