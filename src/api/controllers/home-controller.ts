import * as express from 'express'
import { Request, Response } from 'express'
import sessionTrueMiddleware from '../middlewares/session-true'
import IControllerBase from '../interfaces/controller-base'
import { loadCss, loadJs } from '../helpers/view'
import { constants } from '../../configs/constants'

class HomeController implements IControllerBase {
  public path = '/'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get('/', sessionTrueMiddleware, this.index)
  }

  index = (req: Request, res: Response) => {
    let locals = {
      title: 'Inicio',
      constants: constants,
      csss: loadCss([
        'assets/css/styles',
        'assets/css/demo'
        
      ]), 
      jss: loadJs([
        'assets/js/app',
      ]), 
    }
    res.status(200).render('home/index', locals)
  }
}

export default HomeController