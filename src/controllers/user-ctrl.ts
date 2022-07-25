import express from 'express'

import UserService from '../services/user-service'

const UserController = express.Router()

UserController.get('/user', async (req, res) => {
    res.send(await UserService.findUsers())
})

UserController.get('/user/:id', async (req, res) => {
    res.send(await UserService.findUserById(req.params.id))
})

export default UserController
