import express from 'express';
import UsersControllers from '../controllers/users.js';

const usersRouter = express.Router();

const usersControllers = new UsersControllers();

usersRouter.get('/', async (req, res) => {
    const { sucess, statusCode, body  } = await usersControllers.getUsers();

    res.status(statusCode).send({ sucess, statusCode, body })
})

export default usersRouter;