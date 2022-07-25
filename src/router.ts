import express from "express";

import UserController from './controllers/user-ctrl'
import ErrorHandler from "./helpers/error-handler";
import RequestLogger from "./helpers/request-logger";

const controllers = [
    UserController
]

const Router = express.Router()

Router.use(RequestLogger)
Router.use(controllers)
Router.use(ErrorHandler)

export default Router
