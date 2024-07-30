import fastify from 'fastify'
import { createColor } from './routers/color/create-color'
import cors from '@fastify/cors'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { createBrand } from './routers/create-brand'
import { createTypeVehicle } from './routers/create-typeVehicle'
import { createModel } from './routers/create-model'
import { listVehicle } from './routers/vehicle/list-vehicles'
import { createVehicle } from './routers/vehicle/create-vehicle'
import { detailVehicle } from './routers/vehicle/detail-vehicle'
import { updateVehicle } from './routers/vehicle/update-vehicle'
import { listColor } from './routers/color/list-color'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createColor)
app.register(createBrand)
app.register(createTypeVehicle)
app.register(createModel)
app.register(createVehicle)
app.register(listVehicle)
app.register(detailVehicle)
app.register(updateVehicle)
app.register(listColor)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor online')
  })
