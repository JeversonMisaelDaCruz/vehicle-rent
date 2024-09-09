import fastify from 'fastify'
import { createColor } from './routers/color/create-color'
import cors from '@fastify/cors'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { createBrand } from './routers/create-brand'
import { createTypeVehicle } from './routers/vehicle/create-typeVehicle'
import { createModel } from './routers/create-model'
import { listVehicles } from './routers/vehicle/list-vehicles'
import { createVehicle } from './routers/vehicle/create-vehicle'
import { detailVehicle } from './routers/vehicle/detail-vehicle'
import { updateVehicle } from './routers/vehicle/update-vehicle'
import { listColor } from './routers/color/list-color'
import { detailColor } from './routers/color/detail-color'

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
app.register(listVehicles)
app.register(detailVehicle)
app.register(updateVehicle)
app.register(listColor)
app.register(detailColor)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor online')
  })
