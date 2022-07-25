import express from 'express'
import 'express-async-errors'
import Router from './src/router'
import Logger from './src/helpers/logger'

const PORT = 3000

const app = express()

app.use(Router)
app.listen(PORT, () => {
    Logger.info(`Server listening on port ${PORT}`)
})
