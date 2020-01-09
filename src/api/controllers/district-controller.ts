import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/controller-base'
import { createConnection, Like } from 'typeorm'
import { VWLocation } from '../models/vw-localtion'

class DistrictController implements IControllerBase {
  public path = '/district'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get('/search', this.search)
  }

  search = async (req: Request, res: Response) => {
    let resp:any
    let respStatus:number
    let con:any = undefined
    try {
      con = await createConnection()
      let vwLocationRepository = con.getRepository(VWLocation)
      let name = `%${req.query.name}%`
      resp = await vwLocationRepository.find({
        name: Like(name),
        take: 10,
      })
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

export default DistrictController