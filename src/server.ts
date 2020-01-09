import 'reflect-metadata'
import App from './configs/app'
import * as bodyParser from 'body-parser'
import loggerMiddleware from './api/middlewares/logger'
import { controllers } from './configs/bootstrap'

const app = new App({
  port: 5000,
  controllers: controllers,
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ 
      extended: true 
    }),
    loggerMiddleware
  ]
})

app.listen()