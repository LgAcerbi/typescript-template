import HttpError from './http-error'
import { Request, Response, NextFunction } from 'express'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorHandler = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof HttpError) {
        return res.status(err.statusCode).send(err.message)
    }

    return res.status(500).send(err.message)
}

export default ErrorHandler
