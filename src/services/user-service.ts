import User from '../entities/user'
import HttpError from '../helpers/http-error'

const usersMock = [
    {
        name: 'Some Name',
        birthdate: new Date(),
        id: 'some-id',
    },
]

class UserService {
    static async findUsers(): Promise<Array<User>> {
        return usersMock
    }

    static async findUserById(id: string): Promise<User> {
        const foundUser = usersMock.find((user) => user.id === id)

        if (!foundUser) {
            throw new HttpError('User not found', 404)
        }

        return foundUser
    }
}

export default UserService
