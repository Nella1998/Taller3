import * as express from 'express'
import { Request, Response } from 'express'
import sessionTrueMiddleware from '../middlewares/session-true'
import IControllerBase from '../interfaces/controller-base'

class ErrorController implements IControllerBase {
  public path = '/error'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get('/access/:number', sessionTrueMiddleware ,this.index)
  }

  index = (req: Request, res: Response) => {
    res.status(404).send('Recurso no encontrado');
  }
}

export default ErrorController