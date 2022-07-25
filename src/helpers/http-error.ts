import Logger from './logger'

class HttpError extends Error {
    statusCode: number
    message: string

    constructor(message: string, statusCode: number) {
        super()
        Logger.error({ message, statusCode })
        this.statusCode = statusCode
        this.message = message
    }
}

export default HttpError
