import * as express from 'express'
import { Request, Response } from 'express'
import sessionFalseMiddleware from '../middlewares/session-false'
import IControllerBase from '../interfaces/controller-base'
import { loadCss, loadJs } from '../helpers/view'
import { constants } from '../../configs/constants'

class LoginController implements IControllerBase {
  public path = '/login'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get('/', sessionFalseMiddleware ,this.index)
    this.router.get('/Reset_Password', sessionFalseMiddleware ,this.ResetPassword)
    this.router.post('/access', sessionFalseMiddleware ,this.access)
    
  }

  ResetPassword = (req: Request, res: Response) => {
    let locals = {
      title: 'Recuperar contraseña',
      constants: constants,
      message_color: '',
      message: '',
      csss: loadCss([
        'assets/css/styles',
        'assets/css/login',
      ]), 
      jss: loadJs([]), 
    }
    res.status(200).render('login/reset', locals)
  }



  index = (req: Request, res: Response) => {
    let locals = {
      title: 'Ingresar',
      constants: constants,
      message_color: '',
      message: '',
      csss: loadCss([
        'assets/css/styles',
        'assets/css/login',
      ]), 
      jss: loadJs([]), 
    }
    res.status(200).render('login/', locals)
  }


  access = (req: Request, res: Response) => {
    let user = req.body.user
    let password = req.body.password
    if(user == 'admin@ulima.com.pe'){
    
      let locals = {
        title: 'Correo Enviado',
        constants: constants,
        message_color: 'text-danger',
        message: 'Correo Enviado',
        csss: loadCss([
          'assets/css/styles',
          'assets/css/login',
        ]), 
        jss: loadJs([]), 
      }
    }else{
      let locals = {
        title: 'Correo Incorrecto',
        constants: constants,
        message_color: 'text-danger',
        message: 'Correo no Encontrado',
        csss: loadCss([
          'assets/css/styles',
          'assets/css/login',
        ]), 
        jss: loadJs([]), 
      }
      res.status(200).render('login/index', locals)
    }
  }
}

export default LoginController