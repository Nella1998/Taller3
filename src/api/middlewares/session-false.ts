import { Request, Response } from 'express'

const sessionFalseMiddleware = (req: Request, resp: Response, next) => {
  console.log('Session False')
  next()
}

export default sessionFalseMiddleware