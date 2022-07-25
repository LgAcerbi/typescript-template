import { Request, Response, NextFunction } from 'express'
import Logger from './logger'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RequestLogger = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    Logger.debug(`${req.method} | ${req.path}`)

    next()
}

export default RequestLogger
