import * as express from 'express'
import { Application } from 'express'
import error404 from '../api/middlewares/error-404'

class App {
  public app: Application
  public port: number

  constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
    this.app = express()
    this.port = appInit.port
    this.middlewares(appInit.middleWares)
    this.routes(appInit.controllers)
    this.assets()
    this.template()
    this.errorHandler()
  }

  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
    middleWares.forEach(middleWare => {
      this.app.use(middleWare)
    })
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
    controllers.forEach(controller => {
      console.log(controller.path)
      this.app.use(controller.path, controller.router)
    })
  }

  private assets() {
    this.app.use(express.static('public'))
    this.app.use(express.static('views'))
  }

  private template() {
    this.app.set('view engine', 'ejs')
  }

  private errorHandler(){
    this.app.use(error404())
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`)
    })
  }
}

export default App