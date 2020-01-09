import { Request, Response } from 'express'

const sessionTrueMiddleware = (req: Request, resp: Response, next) => {
  console.log('Session True')
  next()
}

export default sessionTrueMiddleware