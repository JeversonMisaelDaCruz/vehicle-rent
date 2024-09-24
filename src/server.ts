import fastify from 'fastify'
import { createColor } from './routers/color/create-color'
import cors from '@fastify/cors'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { createBrand } from './routers/brand/create-brand';
import { createTypeVehicle } from './routers/type-vehicle/create-typeVehicle'
import { createModel } from './routers/model/create-model'
import { listVehicles } from './routers/vehicle/list-vehicles'
import { createVehicle } from './routers/vehicle/create-vehicle'
import { updateVehicle } from './routers/vehicle/update-vehicle'
import { listColor } from './routers/color/list-color'
import { detailColor } from './routers/color/detail-color'
import { updateColor } from './routers/color/update-color';
import { detailVehicle } from './routers/vehicle/detail-vehicle';

const app = fastify()

// Registrar o CORS
app.register(cors, {
  origin: true,
})

// Configurar os compiladores de validação e serialização
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// Registrar as rotas
app.register(createColor)
app.register(createBrand)
app.register(createTypeVehicle)
app.register(createModel)
app.register(createVehicle)
app.register(listVehicles)
app.register(detailVehicle)
app.register(updateVehicle)
app.register(listColor)
app.register(detailColor)
app.register(updateColor)

// Iniciar o servidor em uma única porta
app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  console.log(`Server is running at ${address}`)
})
