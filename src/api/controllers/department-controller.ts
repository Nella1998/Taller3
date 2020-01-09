import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/controller-base'
import { createConnection } from 'typeorm'
import { Department } from '../models/departament'

class DepartmentController implements IControllerBase {
  public path = '/department'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get('/list', this.list)
  }

  list = async (req: Request, res: Response) => {
    let resp:any
    let respStatus:number
    let con:any = undefined
    try {
      con = await createConnection()
      let departmentRepository = con.getRepository(Department)
      resp = await departmentRepository.find()
      respStatus = 200
    } catch (err) {
      respStatus = 500
      resp = err
    } finally {
      if(con !== 'undefined'){
        await con.close();
      }
    }
    res.status(respStatus).send(resp)
  }
}

export default DepartmentController