import fastify from 'fastify'
import { createColor } from './routers/create-color'
import cors from '@fastify/cors'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { createBrand } from './routers/create-brand'
import { createTypeVehicle } from './routers/create-typeVehicle'
import { createModel } from './routers/create-model'
import { listVehicle } from './routers/list-vehicles'
import { createVehicle } from './routers/create-vehicle'
import { detailVehicle } from './routers/detail-vehicle'
import { updateVehicle } from './routers/update-vehicle'

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

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor online')
  })
